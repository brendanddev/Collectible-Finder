
/**
 * @file AuthContext.tsx
 * @author Brendan Dileo, May 2025
 * Context for managing authentication state and user data.
 */

import { createContext, useState, useEffect, useContext } from 'react';
import { AuthContextType, AuthProviderProps } from '../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../utils/api';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [userToken, setUserToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Registration logic
    const register = async (name: string, username: string, email: string, password: string) => {
        try {
            setError(null);
            const response = await api.post('/register', { name, username, email, password });
            const { userId } = response.data;
            
            if (userId) {
                // After successful registration, automatically log in
                await login(email, password);
            }
        } catch (error: any) {
            const errorMessage = error.response?.data?.error || 'Registration failed';
            setError(errorMessage);
            throw new Error(errorMessage);
        }
    };

    // Login logic
    const login = async (email: string, password: string) => {
        try {
            setError(null);
            const response = await api.post('/login', { email, password });
            const { token } = response.data;

            if (token) {
                await AsyncStorage.setItem('token', token);
                setUserToken(token);
            }
        } catch (error: any) {
            const errorMessage = error.response?.data?.error || 'Login failed';
            setError(errorMessage);
            throw new Error(errorMessage);
        }
    };

    // Logout logic
    const logout = async () => {
        try {
            setError(null);
            await AsyncStorage.removeItem('token');
            setUserToken(null);
        } catch (error: any) {
            const errorMessage = 'Logout failed';
            setError(errorMessage);
            throw new Error(errorMessage);
        }
    };

    // Load token 
    const loadToken = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) setUserToken(token);
        } catch (error) {
            console.error('Load token error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadToken();
    }, []);

    return (
        <AuthContext.Provider value={{ userToken, login, logout, register, loading, error, setError }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};