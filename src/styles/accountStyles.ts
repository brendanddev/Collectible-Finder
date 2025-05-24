
/**
 * @file accountStyles.ts
 * @author Brendan Dileo, May 2025
 * Styles for the Account Screen
 */

import { StyleSheet } from 'react-native';

const accountStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f5f5',
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#242b3b',
    marginBottom: 5,
  },
  username: {
    fontSize: 24,
    fontWeight: '600',
    color: '#242b3b',
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  statsSection: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#242b3b',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#242b3b',
    marginVertical: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  settingsSection: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
    color: '#242b3b',
  },
  logoutButton: {
    backgroundColor: '#e01d1d',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  switchAuthButton: {
    padding: 15,
    alignItems: 'center',
  },
  switchAuthText: {
    color: '#007AFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  changeProfPictureButton: {
  marginTop: 10,
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderRadius: 8,
  backgroundColor: 'black',
  alignSelf: 'center',
},
});

export default accountStyles; 