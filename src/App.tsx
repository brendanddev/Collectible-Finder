
/**
 * @file App.tsx
 * @author Brendan Dileo, May 2025
 * The main entry point for the collectible finder app.
 */

import { AuthProvider } from './contexts/AuthContext';
import TabNavigator from './navigation/TabNavigator';

export default function App() {
  return (
    <AuthProvider>
      <TabNavigator />
    </AuthProvider>
  );
}
