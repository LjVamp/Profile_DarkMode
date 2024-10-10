import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import icons from Expo

const Sidebar = ({ toggleSidebar }) => {
  return (
    <View style={styles.sidebar}>
      {/* Close Sidebar Icon */}
      <TouchableOpacity onPress={toggleSidebar} style={styles.closeIcon}>
        <Ionicons name="close" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Sidebar Content */}
      <View style={styles.profileContainer}>
        {/* Avatar */}
        <Image
          source={require('./assets/ME.jpg')}
          style={styles.avatar}
        />

        {/* Name */}
        <Text style={styles.name}>BANDIOLA, LEDY JOY D.</Text>
        <Text style={styles.info}>Student</Text>
      </View>

      {/* Footer Text */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© Bandiola, Ledy Joy D.</Text>
        <Text style={styles.footerText}>BSIT 3R7</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '70%',
    height: '100%',
    backgroundColor: '#4A4947',
    padding: 20,
    zIndex: 1000,
    justifyContent: 'space-between', // Push footer to the bottom
  },
  closeIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '300',
  },
});

export default Sidebar;
