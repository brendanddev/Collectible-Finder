
/**
 * @file types.ts
 * @author Brendan Dileo, May 2025
 * Type definitions for the app
 */

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootTabParamList = {
  Home: undefined;
  Map: undefined;
  Capture: undefined;
  Collection: undefined;
};

export type HomeScreenProps = {
    navigation: NativeStackNavigationProp<RootTabParamList, "Home">;
};

export type MapScreenProps = {
    navigation: NativeStackNavigationProp<RootTabParamList, "Map">;
};

export type CaptureScreenProps = {
    navigation: NativeStackNavigationProp<RootTabParamList, "Capture">;
};

export type CollectionScreenProps = {
    navigation: NativeStackNavigationProp<RootTabParamList, "Collection">;
};

export type PhotoNote = {
    uri: string;
    note: string;
};

export interface Photo {
    uri: string;
    [key: string]: any;
}

export interface Location {
    LATITUDE: number;
    LONGITUDE: number;
    NAME: string;
    CATEGORY: string;
    WEBSITE: string;
    COMMENTS: string;
}

export interface ShopLocation {
  NAME: string;
  CATEGORY: string;
  LATITUDE: number;
  LONGITUDE: number;
  COMMENTS: string;
  WEBSITE: string;
}

export type UserData = {
    id: string;
    name: string;
    username: string;
    email: string;
    profilePicture?: string;
};

export type AuthContextType = {
    userToken: string | null;
    user: UserData | null;
    setUser: (user: UserData | null) => void;
    updateUser: (user: UserData) => void;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    register: (name: string, username: string, email: string, password: string) => Promise<void>;
    loading: boolean;
    error: string | null;
    setError: (error: string | null) => void;
};

export type AuthProviderProps = {
    children: React.ReactNode;
};