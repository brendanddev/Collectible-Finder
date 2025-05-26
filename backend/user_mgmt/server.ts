
/**
 * @file server.ts
 * @author Brendan Dileo, May 2025
 * The user management system for the app.
 */

import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { PrismaClient } from '@prisma/client';
import { RequestHandler } from 'express';
import { Request, Response } from 'express';
dotenv.config();
const prisma = new PrismaClient();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Uploads dir
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Storage engine
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir);
  }, 
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `profile_${Date.now()}${ext}`);
  }
});
const upload = multer({ 
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

// Register route
const registerHandler: RequestHandler = async (req, res) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    res.status(400).json({ error: 'The following fields are required: email, password, name, username' });
    return;
  }

  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{9,}$/;

  // Validate username
  if (!usernameRegex.test(username)) {
    res.status(400).json({
      error: 'Username must start with a letter, and contain only letters, numbers, or underscores. Length must be 3-20 characters.'
    });
    return;
  }

  // Validate email
  if (!emailRegex.test(email)) {
    res.status(400).json({ error: 'Invalid email format.' });
    return;
  }

  // Validate password
  if (!passwordRegex.test(password)) {
    res.status(400).json({ 
      error: 'Password must be atleast 9 characters long and include a lowercase letter, uppercase letter, number, and special character.' 
    });
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
        name,
        username,
        email,
        password: hashedPassword
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

    // User data displayed on account screen
    res.status(200).json({ 
      message: 'Login successful.', 
      token,
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        profilePicture: user.profilePicture
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
app.post('/login', loginHandler);

// Logout route
app.post('/logout', (req, res) => {
});

// Upload profile picture route
const uploadHandler = async (
  req: Request<{ userId: string }, any, any>,
  res: Response
) => {
  const userId = parseInt(req.params.userId, 10);

  const file = req.file as Express.Multer.File;
  if (!file) {
    res.status(400).json({ error: 'No file uploaded!' });
    return;
  }
  try {
    await prisma.user.update({
      where: { id: userId },
      data: {
        profilePicture: `/uploads/${file.filename}`,
      },
    });

    // TODO: 
    res.status(200).json({ message: 'Profile picture uploaded successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update user profile picture' });
  }
};
app.post('/upload-profile-picture/:userId', upload.single('profilePicture'), uploadHandler);

// Update user stats route
const updateUserStatsHandler: RequestHandler = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);

}
app.post('/update-user-stats/:userId', updateUserStatsHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});