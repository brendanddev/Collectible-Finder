
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
  },

  saveButton: {
    backgroundColor: "#65c26b",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  saveButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  deleteButton: {
    marginLeft: 20,
    backgroundColor: "#e01d1d",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },

  helpButton: {
    marginTop: 10,
    backgroundColor: "#70a1b3",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  galleryButton: {
    marginTop: 10,
    backgroundColor: "#70a1b3",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  backButton: {
    marginTop: 10,
    backgroundColor: "#70a1b3",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "center",
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

export default captureStyles;