import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Link href="/" style={styles.link}>
        Go Back to Chat
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  link: {
    color: 'blue',
    fontSize: 18,
  },
});

export default ProfileScreen;