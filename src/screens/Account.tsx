
/**
 * @file Account.tsx
 * @author Brendan Dileo, May 2025
 */

import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../contexts/AuthContext';
import useLoadFonts from '../hooks/loadFonts';
import accountStyles from '../styles/accountStyles';

const Account = () => {
  const fontsLoaded = useLoadFonts();
  const { userToken, logout } = useAuth();

  if (!fontsLoaded) return <ActivityIndicator size="large" color="#0000ff" />

  if (!userToken) {
    return (
      <SafeAreaView style={accountStyles.container}>
        <ScrollView contentContainerStyle={accountStyles.scrollContainer}>
          <Text style={[accountStyles.header, { fontFamily: 'Comic Font' }]}>
            Please log in to view your account.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={accountStyles.container}>
      <ScrollView contentContainerStyle={accountStyles.scrollContainer}>
        <Text style={[accountStyles.header, { fontFamily: 'Comic Font' }]}>
          My Account
        </Text>

        <View style={accountStyles.profileSection}>
          <Image
            source={require('../assets/images/user.png')}
            style={accountStyles.profileImage}
          />
          <Text style={[accountStyles.username, { fontFamily: 'Comic Font 2' }]}>
            Collector Name
          </Text>
        </View>

        <View style={accountStyles.statsSection}>
          <Text style={[accountStyles.sectionTitle, { fontFamily: 'Comic Font 2' }]}>
            Collection Stats
          </Text>
          <View style={accountStyles.statsGrid}>
            <View style={accountStyles.statItem}>
              <Ionicons name="images" size={30} color="#242b3b" />
              <Text style={accountStyles.statNumber}>0</Text>
              <Text style={accountStyles.statLabel}>Photos</Text>
            </View>
            <View style={accountStyles.statItem}>
              <Ionicons name="star" size={30} color="#242b3b" />
              <Text style={accountStyles.statNumber}>0</Text>
              <Text style={accountStyles.statLabel}>Favorites</Text>
            </View>
            <View style={accountStyles.statItem}>
              <Ionicons name="location" size={30} color="#242b3b" />
              <Text style={accountStyles.statNumber}>0</Text>
              <Text style={accountStyles.statLabel}>Visited</Text>
            </View>
          </View>
        </View>

        <View style={accountStyles.settingsSection}>
          <Text style={[accountStyles.sectionTitle, { fontFamily: 'Comic Font 2' }]}>
            Settings
          </Text>
          <TouchableOpacity style={accountStyles.settingItem}>
            <Ionicons name="notifications" size={24} color="#242b3b" />
            <Text style={accountStyles.settingText}>Notifications</Text>
            <Ionicons name="chevron-forward" size={24} color="#242b3b" />
          </TouchableOpacity>
          <TouchableOpacity style={accountStyles.settingItem}>
            <Ionicons name="lock-closed" size={24} color="#242b3b" />
            <Text style={accountStyles.settingText}>Privacy</Text>
            <Ionicons name="chevron-forward" size={24} color="#242b3b" />
          </TouchableOpacity>
          <TouchableOpacity style={accountStyles.settingItem}>
            <Ionicons name="help-circle" size={24} color="#242b3b" />
            <Text style={accountStyles.settingText}>Help & Support</Text>
            <Ionicons name="chevron-forward" size={24} color="#242b3b" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={accountStyles.logoutButton}>
          <Text style={accountStyles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account; 