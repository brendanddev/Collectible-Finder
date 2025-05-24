
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

    // Login logic
    const login = async (email: string, password: string) => {
        try {
            const response = await api.post('/login', { email, password });
            const { token } = response.data;

            if (token) {
                await AsyncStorage.setItem('token', token);
                setUserToken(token);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    // Logout logic
    const logout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            setUserToken(null);
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    // Load token 
    const loadToken = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) setUserToken(token);
        } catch (error) {
            console.error('Load token error:', error);
        }
    };

    useEffect(() => {
        loadToken();
    }, []);

    return (
        <AuthContext.Provider value={{ userToken, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};