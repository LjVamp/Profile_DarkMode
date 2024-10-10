import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Profile from './Profile'; // Import the Profile component
import Sidebar from './Sidebar'; // Import the Sidebar component

export default function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appContainer}>
        {/* Profile and Sidebar Components */}
        <Profile toggleSidebar={toggleSidebar} />
        {isSidebarVisible && <Sidebar toggleSidebar={toggleSidebar} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
    position: 'relative',
  },
});
