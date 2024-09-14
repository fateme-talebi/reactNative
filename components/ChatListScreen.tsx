import React from "react";
import { View,FlatList,Text,TouchableOpacity,StyleSheet,} from "react-native";
import CircularImgView from "./CircularImgView";
import { Link } from "expo-router";

const ChatListScreen = ({chats }: any) => {
  const handlePressChat = (chat: any) => {

   // navigation.navigate("Chat", { chatId: chat.id, chatName: chat.name });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePressChat(item)}>
              <CircularImgView imageUri={item.profilePic} />
            <Text style={styles.chatItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
       <Link
        href={'/..componentsChatScreen'}>
          View user
        </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 5 ,paddingTop:30,paddingLeft:15},
  chatItem: { padding: 16, borderBottomColor: "gray", borderBottomWidth: 0.5 },
});

export default ChatListScreen;
