
/**
 * @file Collection.tsx
 * @author Brendan Dileo, May 2025
 * Collection screen for the app
 */

import { View, Text, FlatList, TouchableOpacity, Alert, SafeAreaView, Image, ScrollView, TextInput, } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { LongPressGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';

import { locations } from '../utils/locations';
import collectionStyles from '../styles/collectionStyles';

interface Photo {
  uri: string;
  [key: string]: any;
}

interface Location {
  NAME: string;
  [key: string]: any;
}

const Collection: React.FC = () => {

  const [collection, setCollection] = useState<Photo[]>([]);
  const [visitedShops, setVisitedShops] = useState<Location[]>([]);
  const [favorites, setFavorites] = useState<Location[]>([]);
  const [photoToDelete, setPhotoToDelete] = useState<string | null>(null);
  const [searchString, setSearchString] = useState<string>('');

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error("Error loading favorites: ", error);
        Alert.alert(
          "Error",
          "There was an issue loading your favorites."
        );
      }
    };
    loadFavorites();
  }, []);

  const loadCollection = async (): Promise<void> => {
    try {
      // Load collection from storage
      const storedCollection = await AsyncStorage.getItem('photoCollection');
      if (storedCollection) {
        setCollection(JSON.parse(storedCollection));
      }
    } catch (error) {
      console.error("Error loading collection: ", error);
      Alert.alert(
        "Error",
        "There was an issue loading your collection."
      );
    }
  };

  // Loads the users collection once the page loads (component mounts)
  useEffect(() => {
    loadCollection();
  }, []);

  const toggleVisited = async (location: Location): Promise<void> => {
    let updatedVisited;
    if (visitedShops.includes(location)) {
      // Filters out the shop from visited shops
      updatedVisited = visitedShops.filter((item) => item !== location);
    } else {
      updatedVisited = [...visitedShops, location];
    }
    setVisitedShops(updatedVisited);
    await AsyncStorage.setItem('visitedShops', JSON.stringify(updatedVisited));
  };

  // Toggles the favorite status of a shop
  const toggleFavorite = async (location) => {
    let updatedFavorites;
    if (favorites.includes(location)) {
      updatedFavorites = favorites.filter((item) => item !== location);
    } else {
      updatedFavorites = [...favorites, location];
    }
    setFavorites(updatedFavorites);
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const deletePhoto = async (photoUri) => {
    if (photoUri) {
      const updatedCollection = collection.filter(
        (item) => item.uri !== photoUri
      );
      setCollection(updatedCollection);
      await AsyncStorage.setItem(
        'photoCollection',
        JSON.stringify(updatedCollection)
      );
      setPhotoToDelete(null);
    }
  };

  const showDeleteAlert = (photoUri) => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this photo?',
      [
        {
          text: 'Cancel',
          onPress: () => setPhotoToDelete(null),
        },
        {
          text: 'Delete',
          onPress: () => {
            setPhotoToDelete(photoUri);
            deletePhoto(photoUri);
          },
        },
      ]
    );
  };

  const renderShop = (item: Location): JSX.Element => {
    const isFavorited = favorites.includes(item);
    const isVisited = visitedShops.includes(item);

    return (
      <View style={collectionStyles.item}>
        <Text style={collectionStyles.itemText}>{item.NAME}</Text>

        <TouchableOpacity onPress={() => toggleFavorite(item)}>
          <Text style={collectionStyles.star}>{isFavorited ? '⭐' : '☆'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleVisited(item)}>
          <Text style={collectionStyles.buttonText}>
            {isVisited ? 'Visited' : 'Mark as Visited'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const filteredLocations = locations.filter((location) =>
    location.NAME.toLowerCase().includes(searchString.toLowerCase())
  );

  const favoriteLocations = locations.filter((loc) => favorites.includes(loc));

  return (
    <SafeAreaView style={collectionStyles.container}>
      <ScrollView contentContainerStyle={collectionStyles.scrollContainer}>
        <Text style={[collectionStyles.header, { fontFamily: 'Comic Font' }]}>
          My Collection
        </Text>

        <View style={collectionStyles.collectionSection}>
          <Text
            style={[
              collectionStyles.subHeader,
              { fontFamily: 'Comic Font 2' },
            ]}>
            Capture Collection
          </Text>
          // If the user has items in their collection, they are displayed with a flat list */}
          {collection.length > 0 ? (
            <FlatList
              data={collection}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
              
                <GestureHandlerRootView>
                  <LongPressGestureHandler
                    onHandlerStateChange={(e) => {
                      if (e.nativeEvent.state === 4) {
                        showDeleteAlert(item.uri);
                      }
                    }}>
                    <View style={collectionStyles.collectionItem}>
                      <Image
                        source={{ uri: item.uri }}
                        style={collectionStyles.collectionImage}
                      />
                      <Text style={collectionStyles.itemText}>{item.note}</Text>
                    </View>
                  </LongPressGestureHandler>
                </GestureHandlerRootView>
              )}
            />
          ) : (
            <Text style={collectionStyles.emptyText}>Collection is empty</Text>
          )}
        </View>

        <View style={collectionStyles.favoritesSection}>
          <Text
            style={[
              collectionStyles.subHeader,
              { fontFamily: 'Comic Font 2' },
            ]}>
            Favorite Shops
          </Text>

          <ScrollView style={collectionStyles.scrollableShops}>
            {favoriteLocations.length > 0 ? (
              favoriteLocations.map((item) => renderShop(item))
            ) : (
              <Text style={collectionStyles.emptyText}>
                No favorite shops yet!
              </Text>
            )}
          </ScrollView>
        </View>

        <View style={collectionStyles.browseSection}>
          <Text
            style={[
              collectionStyles.subHeader,
              { fontFamily: 'Comic Font 2' },
            ]}>
            Browse Shops
          </Text>

          <View style={collectionStyles.searchContainer}>
            <Ionicons
              name="search"
              size={20}
              color="#888"
              style={collectionStyles.searchIcon}
            />
            // Updates the search string in state as the user types
            <TextInput
              style={collectionStyles.searchBar}
              placeholderTextColor="gray"
              placeholder="Search for a shop"
              value={searchString}
              onChangeText={(text) => setSearchString(text)}
            />
          </View>

          <ScrollView style={collectionStyles.scrollableShops}>
            // Renders the list of shops that match the users search string. If none, default text shown
            {filteredLocations.length > 0 ? (
              filteredLocations.map((item) => renderShop(item))
            ) : (
              <Text style={collectionStyles.emptyText}>No shops found</Text>
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Collection;