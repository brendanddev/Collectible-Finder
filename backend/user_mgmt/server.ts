
/**
 * @file server.ts
 * @author Brendan Dileo, May 2025
 */
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
const prisma = new PrismaClient();

// Setup express server
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Register route
app.post('/register', async (req:, res) => {      // Throws error????
  const { email, password } = req.body;

  if (!email || !password) 
    return res.status(400).json({ error: 'Email and password are required to register.' });

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return res.status(409).json({ error: 'User already exists.' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    
    if (!user) return res.status(500).json({ error: 'Failed to create user.' });
    res.status(201).json({ message: 'User registered successfully.', userId: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login route
app.post('/login', (req, res) => {
});

// Logout route
app.post('/logout', (req, res) => {
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});