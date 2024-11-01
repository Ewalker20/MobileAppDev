// components/LoginScreen.js

import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const LoginScreen = ({ navigation, route }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (route.params?.username === null) {
      setUsername('');
      setPassword('');
    }
  }, [route.params?.username]);

  const handleLogin = () => {
    if (username && password) {
      // Simulate fetching user data including first and last names
      const firstName = 'John'; // Replace with actual data
      const lastName = 'Doe';    // Replace with actual data
      
      navigation.navigate('Welcome', { username, firstName, lastName });
    } else {
      Alert.alert('Please enter both username and password.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
