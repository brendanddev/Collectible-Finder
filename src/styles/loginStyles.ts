
/**
 * @file loginStyles.ts
 * @author Brendan Dileo, May 2025
 * Styles for the Login screen
 */

import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    textAlign: 'center',
    marginBottom: 24,
    color: '#242b3b',
  },

  input: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    backgroundColor: '#f9f9f9',
    padding: 14,
    marginBottom: 18,
    borderRadius: 10,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#242b3b',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 10,
    shadowColor: '#050505',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
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
    textAlign: 'center',
    color: '#007bff',
    fontSize: 15,
    marginTop: 12,
  },

  errorText: {
    color: '#e01d1d',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default loginStyles;
