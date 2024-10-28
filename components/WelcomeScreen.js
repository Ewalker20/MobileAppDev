// components/WelcomeScreen.js

import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const WelcomeScreen = ({ route, navigation }) => {
  const { username } = route.params;

  const handleLogout = () => {
    navigation.navigate('Login', { username: null });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome, {username}!</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile', { currentUsername: username })}>
        <Text style={styles.buttonText}>View Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
