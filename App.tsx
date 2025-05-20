
/**
 * @file App.tsx
 * @author Brendan Dileo, May 2025
 * The main entry point for the collectible finder app.
 */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/Home';
import TabNavigator from './navigation/TabNavigator';

export default function App() {
  return (
      <TabNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
