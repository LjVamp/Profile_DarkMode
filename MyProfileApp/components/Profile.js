import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Profile = ({ toggleSidebar }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dynamicStyles = isDarkMode ? darkStyles : lightStyles;

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      {/* Header with Menu and Notification Icons */}
      <View style={styles.header}>
        {/* Menu Icon */}
        <TouchableOpacity onPress={toggleSidebar} style={styles.menuIcon}>
          <Ionicons name="menu" size={30} color={isDarkMode ? "#fff" : "#333"} />
        </TouchableOpacity>

        {/* Notification Icon */}
        <TouchableOpacity style={styles.notificationIcon}>
          <Ionicons name="notifications" size={30} color={isDarkMode ? "#fff" : "#333"} />
        </TouchableOpacity>
      </View>

      {/* Avatar and Profile Details */}
      <Image source={require('../assets/ME.jpg')} style={styles.avatar} />
      <Text style={[styles.name, dynamicStyles.text]}>BANDIOLA, LEDY JOY D.</Text>
      <Text style={[styles.info, dynamicStyles.text]}>3rd Year, USTP CDO</Text>
      <Text style={[styles.info, dynamicStyles.text]}>bandiola.ledyjoy@gmail.com</Text>

      {/* Toggle for Light/Dark Mode */}
      <View style={styles.switchContainer}>
        <Text style={[styles.modeText, dynamicStyles.text]}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
    </View>
  );
};

// Common Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  menuIcon: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  notificationIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 150,
    marginBottom: 20,
    alignSelf: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  modeText: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 10,
  },
});

// Light Mode Styles
const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f4f8',
  },
  text: {
    color: '#333',
  },
});

// Dark Mode Styles
const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
  },
  text: {
    color: '#fff',
  },
});

export default Profile;
