
/**
 * @file Capture.tsx
 * @author Brendan Dileo, May 2025
 */

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { CameraView, useCameraPermissions, CameraCapturedPicture } from 'expo-camera';
import { CaptureScreenProps, PhotoNote } from '../types/types';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import useLoadFonts from '../hooks/loadFonts';
import captureStyles from '../styles/captureStyles';

const Capture = ({ navigation }: CaptureScreenProps) => {
  const fontsLoaded = useLoadFonts();
  if (!fontsLoaded) return <ActivityIndicator size="large" color="#0000ff" />

  const [photo, setPhoto] = useState<string | null>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [note, setNote] = useState<string>('');
  const [hasSaved, setHasSaved] = useState<boolean>(false);

  useEffect(() => {
    if (permission === null) {
      requestPermission();
    }
  }, [permission, requestPermission]);

  const handleImagePick = async (): Promise<void> => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permission Required',
        'Sorry, we need permission to access your camera roll!',
        [{ text: 'OK' }]
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setPhoto(result.assets[0].uri);
      setHasSaved(false);
    }
  };

  const takePicture = async (): Promise<void> => {
    if (cameraRef.current) {
      try {
        const photoData: CameraCapturedPicture = await cameraRef.current.takePictureAsync();
        setPhoto(photoData.uri);
        setHasSaved(false);
      } catch (error) {
        console.error('Error taking picture:', error);
        Alert.alert(
          'Error',
          'Something went wrong while taking the picture. Please try again.',
          [{ text: 'OK' }]
        );
      }
    }
  };

  const savePhotoWithNote = async (): Promise<void> => {
    if (photo && note) {
      const newPhoto: PhotoNote = { uri: photo, note };
      try {
        const storedCollection = await AsyncStorage.getItem('photoCollection');
        const collection: PhotoNote[] = storedCollection ? JSON.parse(storedCollection) : [];
        collection.push(newPhoto);
        await AsyncStorage.setItem('photoCollection', JSON.stringify(collection));
        setHasSaved(true);
        setPhoto(null);
        setNote('');
      } catch (error) {
        console.error('Error saving photo:', error);
      }
    } else {
      Alert.alert(
        'Missing Information',
        'Please provide a note and capture a photo first!',
        [{ text: 'OK' }]
      );
    }
  };

  const deletePhoto = (): void => {
    setPhoto(null);
    setNote('');
    setHasSaved(false);
  };

  return (
    <ScrollView >
      <View style={captureStyles.container}>
        <Text style={[captureStyles.header, { fontFamily: 'Comic Font' }]}>
          Capture A Photo
        </Text>

        <View style={captureStyles.subheaderCard}>
          <Text
            style={[
              captureStyles.subheaderText,
              { fontFamily: 'Comic Font 2' },
            ]}
          >
            Capture your visits, cool discoveries, art, and collectibles to
            build your virtual collection gallery!
          </Text>
          <View style={captureStyles.speechBubbleTriangle} />
        </View>

        {/* Checks to see if the user granted camera permissions */}
        {!permission?.granted ? (
          <View style={captureStyles.permissionContainer}>
            <Text style={captureStyles.permissionText}>
              Camera access is required to take photos.
            </Text>
            <TouchableOpacity
              style={captureStyles.permissionButton}
              onPress={requestPermission}
            >
              <Text style={captureStyles.permissionButtonText}>
                Grant Permission
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <CameraView ref={cameraRef} style={captureStyles.cameraContainer}>
            <View style={captureStyles.cameraOverlay}>
              <TouchableOpacity
                onPress={takePicture}
                style={captureStyles.captureButton}
              >
                <Ionicons name="camera" size={40} color="white" />
              </TouchableOpacity>
            </View>
          </CameraView>
        )}

        {/* Displayed if a photo has been taken or picked */}
        {photo && (
          <View style={captureStyles.photoSection}>
            <Image source={{ uri: photo }} style={captureStyles.photo} />
            <TextInput
              style={captureStyles.noteInput}
              placeholderTextColor="gray"
              placeholder="Add a note for your collection..."
              value={note}
              onChangeText={setNote}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <TouchableOpacity
                onPress={savePhotoWithNote}
                style={captureStyles.saveButton}
              >
                <Text
                  style={[
                    captureStyles.saveButtonText,
                    { fontFamily: 'Comic Font 2' },
                  ]}
                >
                  Save
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={deletePhoto}
                style={captureStyles.deleteButton}
              >
                <Ionicons name="close" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}

        <TouchableOpacity onPress={handleImagePick} style={captureStyles.pickImageButton}>
          <Text style={captureStyles.pickImageButtonText}>Pick an Image</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Capture;
