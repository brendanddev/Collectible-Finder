
/**
 * @file notifications.ts
 * @author Brendan Dileo, May 2025
 * 
 */

import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

import { Platform } from 'react-native';

// Configure foreground notification behaviour
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
        shouldShowBanner: true,
        shouldShowList: true,
    }),
});

// Request notification permissions
export async function requestNotificationPermissions(): Promise<string | undefined> {
    let expoPushToken: string | undefined;

    // Check if device is physical device
    if (Device.isDevice) {
        const { status: existingPermissionStatus } = await Notifications.getPermissionsAsync();
        let currentPermissionStatus = existingPermissionStatus;

        // Request if not granted already
        if (existingPermissionStatus !== 'granted') {
            const { status: newPermissionStatus } = await Notifications.requestPermissionsAsync();
            currentPermissionStatus = newPermissionStatus;
        }

        // If permission granted get token
        if (currentPermissionStatus === 'granted') {
            const tokenResponse = await Notifications.getExpoPushTokenAsync();
            expoPushToken = tokenResponse.data;
            console.log('Expo Push Token:', expoPushToken);
        } else {
            console.warn('Notification permissions not granted');
        }
    } else {
        console.warn('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {

        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.DEFAULT,
            sound: 'default',
        });
    }

    return expoPushToken;
}

// Send basic noti 
export async function sendTestNotification(): Promise<void> {
    // Steps to sending a notification
    // Ensure permissions are granted
    // Create a notification content object
    // Trigger the notification
    // Handle any errors
}