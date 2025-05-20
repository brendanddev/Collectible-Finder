
/**
 * @file captureStyles.ts
 * @author Brendan Dileo, May 2025
 * Styles for the Capture screen
 */

import { StyleSheet } from 'react-native';

const captureStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f7f5f5",
    padding: 20,
    alignItems: "center",
  },

  header: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },

  subheaderCard: {
    marginTop: 20,
    backgroundColor: "#d7dcde",
    width: "90%",
    padding: 15,
    borderRadius: 20,
    elevation: 3,
    marginBottom: 20,
    position: "relative",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  speechBubbleTriangle: {
    position: "absolute",
    bottom: -15,
    left: "50%",
    transform: [{ translateX: -90 }],
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderTopWidth: 15,
    borderStyle: "solid",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#d7dcde",
  },

  subheaderText: {
    fontSize: 16,
    textAlign: "center",
  },

  cameraContainer: {
    marginTop: 20,
    width: "85%",
    height: 450,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
    alignContent: "center",
    elevation: 5, // Android?
    backgroundColor: "white",
    borderColor: "#dddddd",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },

  cameraOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
  },

  photoSection: {
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    padding: 15,
    elevation: 3,
  },

  photo: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
  },

  noteInput: {
    height: 40,
    width: "60%",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    color: "black",
  },

  captureButton: {
    backgroundColor: "rgba(202, 208, 219, 0.8)",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  }
  
});

export default captureStyles;