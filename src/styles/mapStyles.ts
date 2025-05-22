
/**
 * @file mapStyles.ts
 * @author Brendan Dileo, May 2025
 * Styles for the Map Screen
 */

import { StyleSheet } from 'react-native';

const mapStyles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f5f5',
    borderColor: 'black',
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  map: {
    width: '100%',
    height: '50%',
  },

  quickAccess: {
    marginTop: 20,
    width: '90%',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  quickItem: {
    width: '48%',
    backgroundColor: '#FFF',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },

  itemText: {
    color: "black",
  },

  locationButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },

  buttonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },

  permissionContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0ebeb",
    padding: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },

  permissionText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: '#333',
    marginBottom: 20,
  },

  permissionButton: {
    backgroundColor: "#4fa4ff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 3,
  },

  permissionButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
});

export default mapStyles;