
/**
 * @file createAccountStyles.ts
 * @author Brendan Dileo, May 2025
 * Styles for the Create Account
 */

import { StyleSheet } from 'react-native';

const createAccountStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f7f5f5',
    },

    card: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#242b3b',
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        fontSize: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    button: {
        backgroundColor: '#242b3b',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
        elevation: 3,
        shadowColor: '#050505',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },

    buttonDisabled: {
        backgroundColor: '#666',
        opacity: 0.7,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },

    linkText: {
        color: '#007bff',
        fontSize: 14,
        textAlign: 'center',
    },

    errorText: {
        color: '#e01d1d',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 16,
    }
});

export default createAccountStyles;
