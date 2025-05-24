
/**
 * @file AuthContext.tsx
 * @author Brendan Dileo, May 2025
 * Context for managing authentication state and user data.
 */

import { createContext, useState } from 'react';
import api from '../utils/api';
import { AuthContextType } from '../types/types';

const AuthContext = createContext<AuthContextType | null>(null);