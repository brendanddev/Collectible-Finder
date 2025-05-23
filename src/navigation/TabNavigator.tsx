
/**
 * @file TabNavigator.tsx
 * @author Brendan Dileo, May 2025
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


import Home from "../screens/Home";
import Capture from "../screens/Capture";
import Collection from "../screens/Collection";
import Map from "../screens/Map";
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarStyle: { backgroundColor: 'black' },
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Map"
                    component={Map}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="map" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Capture"
                    component={Capture}
                    options={{  
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="camera-alt" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Collection"
                    component={Collection}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="collections" size={size} color={color} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Account"
                    component={Account}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="person" size={size} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigator;