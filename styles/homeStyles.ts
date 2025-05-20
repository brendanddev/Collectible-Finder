
/**
 * @file homeStyles.ts
 * @author Brendan Dileo, May 2025
 * Styles for the Home Screen
 */

import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f5f5',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoSection: {
    width: '90%',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  logo: {
    width: 280,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  appDescription: {
    fontSize: 16,
    color: '#8a909c',
    textAlign: 'center',
    paddingHorizontal: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  mainButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#242b3b',
    borderRadius: 12,
    shadowColor: '#050505',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  featuredShops: {
    width: '90%',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  featuredCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featuredText: {
    fontSize: 16,
  },
  quickAccess: {
    width: '90%',
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
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
});

export default homeStyles;
