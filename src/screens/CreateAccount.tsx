
/**
 * @file CreateAccount.tsx
 * @author Brendan Dileo, May 2025
 * The create account page for the app
 */

import { SafeAreaView, Text, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import createAccountStyles from "../styles/createAccountStyles";

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { register, error, setError } = useAuth();

    const handleCreateAccount = async () => {
        if (!email || !password || !confirmPassword) {
            setError("All fields are required!");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            setIsLoading(true);
            setError(null);
            await register(email, password);
        } catch (error: any) {
            // Error already set in context
            console.error('Registration error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
       <SafeAreaView style={createAccountStyles.container}>
            <View style={createAccountStyles.card}>
                <Text style={createAccountStyles.title}>Create Account</Text>

                {error && (
                    <Text style={createAccountStyles.errorText}>{error}</Text>
                )}

                <TextInput
                    placeholder="Email"
                    style={createAccountStyles.input}
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
                    style={createAccountStyles.input}
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                        setError(null);
                    }}
                    secureTextEntry
                    editable={!isLoading}
                />

                <TextInput
                    placeholder="Confirm Password"
                    style={createAccountStyles.input}
                    value={confirmPassword}
                    onChangeText={(text) => {
                        setConfirmPassword(text);
                        setError(null);
                    }}
                    secureTextEntry
                    editable={!isLoading}
                />

                <TouchableOpacity 
                    style={[createAccountStyles.button, isLoading && createAccountStyles.buttonDisabled]} 
                    onPress={handleCreateAccount}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <Text style={createAccountStyles.buttonText}>Sign Up</Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={createAccountStyles.linkText}>Already have an account? Log in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default CreateAccount;