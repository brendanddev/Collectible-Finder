
/**
 * @file server.ts
 * @author Brendan Dileo, May 2025
 */

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Register route
app.post('/register', (req, res) => {
  const { email, password } = req.body;
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