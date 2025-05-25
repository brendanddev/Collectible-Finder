
/**
 * @file Account.tsx
 * @author Brendan Dileo, May 2025
 * The account screen for the app.
 */

import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../contexts/AuthContext';
import useLoadFonts from '../hooks/loadFonts';
import accountStyles from '../styles/accountStyles';
import Login from './Login';
import CreateAccount from './CreateAccount';
import { config } from '../config';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

const Account = () => {
  const fontsLoaded = useLoadFonts();
  const { userToken, logout, user, updateUser } = useAuth();
  const [showLogin, setShowLogin] = useState(true);
  const [isUploading, setIsUploading] = useState(false);

  const pickImage = async () => {
    try {
      // Request permission
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission needed', 'Please grant permission to access your photos');
        return;
      }

      // Pick the image
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5, // Reduced quality for smaller file size
        base64: false,
      });

      if (!result.canceled && result.assets[0]) {
        await uploadImage(result.assets[0].uri);
      }
    } catch (error: any) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick image');
    }
  };

  const uploadImage = async (uri: string) => {
    try {
      setIsUploading(true);

      // Create form data
      const formData = new FormData();
      formData.append('profilePicture', {
        uri,
        type: 'image/jpeg',
        name: 'profile.jpg',
      } as any);

      console.log('Uploading to:', `${config.API_BASE_URL}/upload-profile-picture/${user?.id}`);
      console.log('FormData:', formData);

      // Upload to server
      const response = await fetch(`${config.API_BASE_URL}/upload-profile-picture/${user?.id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${userToken}`,
        },
        body: formData,
      });

      console.log('Response status:', response.status);
      const responseText = await response.text();
      console.log('Response text:', responseText);

      if (!response.ok) {
        throw new Error(`Failed to upload image: ${response.status} ${responseText}`);
      }

      const data = JSON.parse(responseText);
      
      // Update user context with new profile picture
      if (updateUser && user) {
        updateUser({
          ...user,
          profilePicture: `/uploads/${data.filename}`,
        });
      }

      Alert.alert('Success', 'Profile picture updated successfully');
    } catch (error: any) {
      console.error('Error uploading image:', error);
      Alert.alert('Error', `Failed to upload profile picture: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  if (!fontsLoaded) return <ActivityIndicator size="large" color="#0000ff" />

  // If not logged in, show either Login or CreateAccount
  if (!userToken) {
    return (
      <SafeAreaView style={accountStyles.container}>
        {showLogin ? (
          <>
            <Login />
            <TouchableOpacity 
              style={accountStyles.switchAuthButton}
              onPress={() => setShowLogin(false)}
            >
              <Text style={accountStyles.switchAuthText}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <CreateAccount />
            <TouchableOpacity 
              style={accountStyles.switchAuthButton}
              onPress={() => setShowLogin(true)}
            >
              <Text style={accountStyles.switchAuthText}>Already have an account? Log in</Text>
            </TouchableOpacity>
          </>
        )}
      </SafeAreaView>
    );
  }

  // If logged in, show the account content
  return (
    <SafeAreaView style={accountStyles.container}>
      <ScrollView contentContainerStyle={accountStyles.scrollContainer}>
        <Text style={[accountStyles.header, { fontFamily: 'Comic Font' }]}>
          My Account
        </Text>

        <View style={accountStyles.profileSection}>
          
          <Image
            source={
              user?.profilePicture
              ? { uri: `${config.API_BASE_URL}${user.profilePicture}` }
              : require('../assets/images/user.png')
            }
            style={accountStyles.profileImage}
          />

          <TouchableOpacity
            style={accountStyles.changeProfPictureButton}
            onPress={pickImage}
            disabled={isUploading}
          >
            {isUploading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Ionicons name="camera" size={20} color="#fff" />
            )}
          </TouchableOpacity>

          <Text style={[accountStyles.name, { fontFamily: 'Comic Font 2' }]}>
            {user?.name ?? 'Collector Name'}
          </Text>
          <Text style={[accountStyles.username, { fontFamily: 'Comic Font 2' }]}>
            {user?.username ?? ''}
          </Text>
          <Text style={[accountStyles.email, { fontFamily: 'Comic Font 2' }]}>
            {user?.email ?? ''}
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

        <TouchableOpacity 
          style={accountStyles.logoutButton}
          onPress={logout}
        >
          <Text style={accountStyles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account; 