import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';

const ChatScreen = ({ route }:any) => {
  // const { chatName } = route?.params;
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello!' },
    { id: '2', text: 'How are you?' }
  ]);
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = () => {
    if (messageText.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: messageText }]);
      setMessageText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.chatTitle}>{'chatName'}</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.message}>{item.text}</Text>}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={messageText}
          onChangeText={setMessageText}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  chatTitle: { fontSize: 24, marginBottom: 16 },
  message: { padding: 8, borderBottomColor: 'gray', borderBottomWidth: 1 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', padding: 8 },
  input: { flex: 1, borderColor: 'gray', borderWidth: 1, padding: 8, marginRight: 8 }
});

export default ChatScreen;
