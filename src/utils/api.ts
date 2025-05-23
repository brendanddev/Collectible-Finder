
/**
 * @file api.ts
 * @author Brendan Dileo, May 2025
 */

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:3001', // REPLACE 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;


