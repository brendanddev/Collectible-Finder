
/**
 * @file Map.tsx
 * @author Brendan Dileo, May 2025
 */

import { View, Text, SafeAreaView, Linking, ScrollView, Image, TouchableOpacity } from 'react-native';
import { JSX, useEffect, useState } from 'react';
import MapView, { Marker, Callout, Region } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

import mapStyles from '../styles/mapStyles';
import { locations } from '../utils/locations';

interface ShopLocation {
  NAME: string;
  CATEGORY: string;
  LATITUDE: number;
  LONGITUDE: number;
  COMMENTS: string;
  WEBSITE: string;
}

const categoryIcons: Record<string, any> = {
  'Comic Shop': require('../assets/images/comic.png'),
  'Card Shop': require('../assets/images/trading.png'),
  'Game Shop': require('../assets/images/mushroom.png'),
  'Collectibles Shop': require('../assets/images/collectible.png'),
  'Electronics Shop': require('../assets/images/computer.png'),
  'User Icon': require('../assets/images/user.png'),
};

const Map = (): JSX.Element => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [region, setRegion] = useState<Region | null>(null);
  const [filteredMarkers, setFilteredMarkers] = useState<ShopLocation[]>(locations);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [permissionGranted, setPermissionGranted] = useState<boolean | null>(null);

  const getLocation = async (): Promise<void> => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      setPermissionGranted(false);
      return;
    }

    setPermissionGranted(true);
    const currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);

    const newRegion: Region = {
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };

    setRegion(newRegion);
  };

  useEffect(() => {
    getLocation();
  }, []);

  const zoomToLocation = (): void => {
    if (location) {
      setRegion((prevRegion) =>
        prevRegion
          ? {
              ...prevRegion,
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }
          : null
      );
    }
  };

  const filterMarkers = (category: string): void => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredMarkers(locations);
    } else {
      setFilteredMarkers(locations.filter((loc) => loc.CATEGORY === category));
    }
  };

  return (
    <SafeAreaView style={mapStyles.container}>
      <Text style={[mapStyles.heading, { fontFamily: 'Comic Font' }]}>
        Find a Shop
      </Text>

      {permissionGranted === false ? (
        <View style={mapStyles.permissionContainer}>
          <Text style={mapStyles.permissionText}>
            Location access is required to view the map.
          </Text>
          <TouchableOpacity
            style={mapStyles.permissionButton}
            onPress={getLocation}
          >
            <Text style={mapStyles.permissionButtonText}>Grant Permission</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {location && region && (
            <MapView
              style={mapStyles.map}
              region={region}
              onRegionChangeComplete={setRegion}
            >
              {filteredMarkers.map((loc, index) => {
                const icon = categoryIcons[loc.CATEGORY];
                return (
                  <Marker
                    key={index}
                    coordinate={{
                      latitude: loc.LATITUDE,
                      longitude: loc.LONGITUDE,
                    }}
                    image={icon}
                  >
                    <Callout>
                      <View>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                          {loc.NAME}
                        </Text>
                        <Text style={{ fontStyle: 'italic', textAlign: 'center' }}>
                          {loc.CATEGORY}
                        </Text>
                        <Text
                          style={{
                            flexWrap: 'wrap',
                            maxWidth: 250,
                            textAlign: 'center',
                          }}
                        >
                          {loc.COMMENTS}
                        </Text>
                        <Text
                          style={{ color: 'blue', textAlign: 'center' }}
                          onPress={() => Linking.openURL(loc.WEBSITE)}
                        >
                          {loc.WEBSITE}
                        </Text>
                      </View>
                    </Callout>
                  </Marker>
                );
              })}

              {location && (
                <Marker
                  coordinate={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                  }}
                  image={categoryIcons['User Icon']}
                >
                  <Callout>
                    <Text>You are here!</Text>
                  </Callout>
                </Marker>
              )}
            </MapView>
          )}
        </>
      )}

      <ScrollView style={mapStyles.quickAccess}>
        <Text style={[mapStyles.sectionTitle, { fontFamily: 'Comic Font 2' }]}>
          Filter By
        </Text>
        <View style={mapStyles.quickGrid}>
          {[
            { label: 'All', icon: <Ionicons name="layers" size={30} color="black" /> },
            { label: 'Comic Shop', image: require('../assets/images/comic.png') },
            { label: 'Card Shop', image: require('../assets/images/trading.png') },
            { label: 'Game Shop', image: require('../assets/images/mushroom.png') },
            { label: 'Collectibles Shop', image: require('../assets/images/collectible.png') },
            { label: 'Electronics Shop', image: require('../assets/images/computer.png') },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[mapStyles.quickItem, { width: '30%' }]}
              onPress={() => filterMarkers(item.label)}
            >
              {item.icon || (
                <Image source={item.image} style={{ width: 30, height: 30 }} />
              )}
              <Text
                style={[mapStyles.itemText, { fontFamily: 'Comic Font 3' }]}
              >
                {item.label.includes('Shop') ? item.label.split(' ')[0] : item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Map;
