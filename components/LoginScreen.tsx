import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you'd handle authentication logic, then navigate
    navigation.navigate('ChatList');
  };

  const handleSignup = () => {
    // Navigate to Signup screen
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.link} onPress={handleSignup}>Don't have an account? Sign up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, padding: 8 },
  link: { marginTop: 12, color: 'blue', textAlign: 'center' }
});

export default LoginScreen;
