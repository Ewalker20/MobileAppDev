// components/ProfileScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const ProfileScreen = ({ route, navigation }) => {
  const { currentUsername } = route.params;
  const [firstName, setFirstName] = useState(currentUsername);

  const handleSave = () => {
    navigation.navigate('Welcome', { username: firstName });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Profile</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="Enter your name"
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
