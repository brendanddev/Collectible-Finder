
/**
 * @file Login.tsx
 * @author Brendan Dileo, May 2025
 * The login screen conditionally rendered for the app
 */

import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, Alert, TextInput, ActivityIndicator } from "react-native"
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import loginStyles from "../styles/loginStyles"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login, error, setError } = useAuth();

    const handleLogin = async () => {
        if (!email || !password) {
            setError("All fields are required!");
            return;
        }

        try {
            setIsLoading(true);
            setError(null);
            await login(email, password);
        } catch (error: any) {
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
       <SafeAreaView style={loginStyles.container}>
            <View style={loginStyles.card}>
                <Text style={loginStyles.title}>Login</Text>

                {error && (
                    <Text style={loginStyles.errorText}>{error}</Text>
                )}

                <TextInput
                    placeholder="Email"
                    style={loginStyles.input}
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text);
                        setError(null);
                    }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    editable={!isLoading}
                />

                <TextInput
                    placeholder="Password"
                    style={loginStyles.input}
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                        setError(null);
                    }}
                    secureTextEntry
                    editable={!isLoading}
                />

                <TouchableOpacity 
                    style={[loginStyles.button, isLoading && loginStyles.buttonDisabled]} 
                    onPress={handleLogin}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <Text style={loginStyles.buttonText}>Login</Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity>
                <Text style={loginStyles.linkText}>Don't have an account? Create one!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Login;