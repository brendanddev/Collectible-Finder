
/**
 * @file notifications.ts
 * @author Brendan Dileo, May 2025
 * 
 */

import * as Notifications from 'expo-notifications';

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
    // Check device type
    // Check if permissions are already granted
    // If not, request permissions
    // Handle any response
}

// Send basic noti 
export async function sendTestNotification(): Promise<void> {
    // Steps to sending a notification
    // Ensure permissions are granted
    // Create a notification content object
    // Trigger the notification
    // Handle any errors
}