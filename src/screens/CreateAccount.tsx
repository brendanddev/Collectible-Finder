
/**
 * @file CreateAccount.tsx
 * @author Brendan Dileo, May 2025
 * The create account page for the app
 */

import { SafeAreaView, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import { useState } from 'react';
import createAccountStyles from "../styles/createAccountStyles";

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleCreateAccount = async () => {
    };

    return (
        <SafeAreaView>
            <Text>Create Account</Text>

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
            <TextInput
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />

            <TouchableOpacity onPress={handleCreateAccount}>
                <Text>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>Already have an account? Log in</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default CreateAccount;