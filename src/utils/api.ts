
/**
 * @file api.ts
 * @author Brendan Dileo, May 2025
 */

import axios from 'axios';
import { config } from './config';


const api = axios.create({
    baseURL: config.API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;


