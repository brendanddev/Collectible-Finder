
/**
 * @file App.tsx
 * @author Brendan Dileo, May 2025
 * The main entry point for the collectible finder app.
 */

import { AuthProvider } from './contexts/AuthContext';
import TabNavigator from './navigation/TabNavigator';

import Login from './screens/Login';
import CreateAccount from './screens/CreateAccount';

export default function App() {
  return (
    <AuthProvider>
      <CreateAccount />
    </AuthProvider>
  );
}
