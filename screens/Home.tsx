
/**
 * @file Home.tsx
 * @author Brendan Dileo, May 2025
 */

import { SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import useLoadFonts from "../hooks/loadFonts";

import homeStyles from '../styles/homeStyles';

type RootTabParamList = {
    Home: undefined;
    Map: undefined;
    Capture: undefined;
    Collection: undefined;
};

type HomeScreenProps = {
    navigation: NativeStackNavigationProp<RootTabParamList, 'Home'>;
};

const Home = ({ navigation }: HomeScreenProps) => {
  const fontsLoaded = useLoadFonts();
  
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }
  
  return (
    <SafeAreaView style={homeStyles.container}>
      <ScrollView contentContainerStyle={homeStyles.scrollContainer}>
        <View style={homeStyles.header}>
          <Text style={[homeStyles.heading, { fontFamily: 'Comic Font' }]}>
            Collectible Finder
          </Text>
        </View>

        <View style={homeStyles.logoSection}>
          <Image
            source={require('../assets/images/logo.png')}
            style={homeStyles.logo}
          />
          <Text style={[homeStyles.appDescription, { fontFamily: 'Comic Font 2' }]}>
            Welcome to Collectible Finder! Easily discover new collectible
            shops, track the ones you've visited, and expand your collection
            with ease.
          </Text>
        </View>

        <View style={homeStyles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Collection')}
            style={homeStyles.mainButton}>
            <Text style={[homeStyles.buttonText, { fontFamily: 'Comic Font 3', fontSize: 20 }]}>
              Browse Shops
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Collection')}
            style={homeStyles.mainButton}>
            <Text style={[homeStyles.buttonText, { fontFamily: 'Comic Font 3', fontSize: 20 }]}>
              My Collection
            </Text>
          </TouchableOpacity>
        </View>

        <View style={homeStyles.featuredShops}>
          <Text style={[homeStyles.sectionTitle, { fontFamily: 'Comic Font 2' }]}>
            Featured Shops
          </Text>
          <TouchableOpacity style={homeStyles.featuredCard}>
            <Text style={homeStyles.featuredText}>Explore trending comic shops</Text>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={homeStyles.quickAccess}>
          <Text style={[homeStyles.sectionTitle, { fontFamily: 'Comic Font 2' }]}>
            Quick Access
          </Text>

          <View style={homeStyles.quickGrid}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Capture')}
              style={homeStyles.quickItem}>
              <Ionicons name="camera" size={30} color="black" />
              <Text>Capture</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Map')}
              style={homeStyles.quickItem}>
              <Ionicons name="location" size={30} color="black" />
              <Text>View Nearby</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Collection')}
              style={homeStyles.quickItem}>
              <Ionicons name="list" size={30} color="black" />
              <Text>Manage</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Collection')}
              style={homeStyles.quickItem}>
              <Ionicons name="compass" size={30} color="black" />
              <Text>Browse</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;