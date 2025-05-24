
/**
 * @file Login.tsx
 * @author Brendan Dileo, May 2025
 * The login screen conditionally rendered for the app
 */

import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, Alert, TextInput } from "react-native"
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import loginStyles from "../styles/loginStyles"


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleLogin = async () => {
        if (!email || !password) return Alert.alert("Error", "All fields are required!");

        try {
            await login(email, password);
        } catch (error) {
            Alert.alert("Login Failed", "Invalid email or password!");
        }
    };


    return (
        <SafeAreaView>
            <Text>Login</Text>

            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity onPress={handleLogin}>
                <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>Don't Have an Account? Create one!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Login;