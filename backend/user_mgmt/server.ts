
/**
 * @file server.ts
 * @author Brendan Dileo, May 2025
 */

import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../user_mgmt/generated/prisma';
import { RequestHandler } from 'express';
dotenv.config();
const prisma = new PrismaClient();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Register route
const registerHandler: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: 'Email and password are required to register.' });
    return;
  }

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(409).json({ error: 'User already exists.' });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    if (!user) {
      res.status(500).json({ error: 'Failed to create user.' });
      return;
    }

    res.status(201).json({ message: 'User registered successfully.', userId: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
app.post('/register', registerHandler);

// Login route
const loginHandler: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: 'Email and password are required to login.' });
    return;
  }

  try {
    // Find user by email
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ error: 'Invalid email or password.' });
      return;
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Login successful.', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
app.post('/login', loginHandler);

// Logout route
app.post('/logout', (req, res) => {
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});