

import { StyleSheet } from 'react-native';

/**
 * Uses the StyleSheet object to create a JavaScript stylesheet that can be applied
 * to components in other files.
 */
const collectionStyles = StyleSheet.create({

  /* Container for the screen to add padding and structure the page*/
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f7f5f5",
    marginHorizontal: 10,
  },

  /* Ensures everything can be viewed and proper spacing */
  scrollContainer: {
    paddingBottom: 20,
    paddingVertical: 20,
  },

  /* Screen title */
  header: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  /* Section titles */
  subHeader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#555",
  },

  /* Section for displaying collected pictures */
  collectionSection: {
    marginTop: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  /* Image displayed in the capture section */
  collectionImage: {
    width: "100%", 
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },

  /* Adds sapcing to the items in the collection, title too */
  collectionItem: {
    flex: 1, 
    margin: 5, 
    alignItems: "center",
  },

  /* Section for displaying users favorite shops */
  favoritesSection: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#ddd",
    elevation: 2,
  },

  /** Browse shops section */
  browseSection: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    elevation: 2,
  },

  /** Makes browse section scrollable */
  scrollableShops: {
    maxHeight: 250,
  },

  /** Container for the search bar, allows icon to appear on same row as text */
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  /* Search icon */
  searchIcon: {
    marginRight: 10,
  },

  /* Makes the search bar container taller  */
  searchBar: {
    flex: 1,
    height: 40,
  },

  /* Styles the shops displayed in the browse section */
  item: {
    marginTop: 15,
    marginBottom: 15,
    padding: 15,
    borderColor: "#ddd",
    borderWidth: 0,
    borderRadius: 15, 
    backgroundColor: "#f9f9f9", 
    elevation: 5, 
    shadowColor: "black", 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.4,
    shadowRadius: 4,
    marginHorizontal: 10,
  },

  /* Shop text */
  itemText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },

  /* Text for marking a shop as visited */
  buttonText: {
    color: "#6200EE", 
    fontWeight: "bold",
  },

  /* Gold star icon for favorites */
  star: {
    fontSize: 24, 
    color: "#FFD700",
    marginRight: 10,
  },

  /* Text shown if the capture or favorited shops sections are empty */
  emptyText: {
    textAlign: "center",
    color: "#777",
    fontSize: 16,
  },

});

export default collectionStyles;