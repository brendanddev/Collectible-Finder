
/**
 * @file CreateAccount.tsx
 * @author Brendan Dileo, May 2025
 * The create account page for the app
 */

import { SafeAreaView, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import { useState } from 'react';
import api from '../utils/api';
import createAccountStyles from "../styles/createAccountStyles";

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleCreateAccount = async () => {
    };

    return (
       <SafeAreaView style={createAccountStyles.container}>
            <View style={createAccountStyles.card}>
                <Text style={createAccountStyles.title}>Create Account</Text>

                <TextInput
                    placeholder="Email"
                    style={createAccountStyles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    placeholder="Password"
                    style={createAccountStyles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TextInput
                    placeholder="Confirm Password"
                    style={createAccountStyles.input}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />

                <TouchableOpacity style={createAccountStyles.button} onPress={handleCreateAccount}>
                    <Text style={createAccountStyles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={createAccountStyles.linkText}>Already have an account? Log in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default CreateAccount;