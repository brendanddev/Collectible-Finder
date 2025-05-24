
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
       <SafeAreaView style={loginStyles.container}>
            <View style={loginStyles.card}>
                <Text style={loginStyles.title}>Login</Text>

                <TextInput
                placeholder="Email"
                style={loginStyles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                />

                <TextInput
                placeholder="Password"
                style={loginStyles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                />

                <TouchableOpacity style={loginStyles.button} onPress={handleLogin}>
                <Text style={loginStyles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Text style={loginStyles.linkText}>Don't have an account? Create one!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Login;