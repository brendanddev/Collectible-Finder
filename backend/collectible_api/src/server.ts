
/**
 * @file server.ts
 * @author Brendan Dileo, May 2025
 * 
 */

import express from 'express';
import cors from 'cors';

// App setup
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});