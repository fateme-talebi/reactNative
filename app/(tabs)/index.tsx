import ChatListScreen from "@/components/ChatListScreen";
import ChatScreen from "@/components/ChatScreen";
import CircularImgView from "@/components/CircularImgView";
import LoginScreen from "@/components/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Link } from "expo-router";
import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
interface Chats {
  id: number;
  name: string;
  profilePic?: string;
}
const chats: Chats[] = [
  {
    id: 1,
    name: "Fateme",
    profilePic: require("@/assets/images/profile1.png"),
  },
  {
    id: 2,
    name: "Sara",
    profilePic: require("@/assets/images/profile2.png"),
  },
  { id: 3, name: "Zahra", profilePic: "" },
  {
    id: 4,
    name: "Mina",
    profilePic: require("@/assets/images/profile1.png"),
  },
  {
    id: 5,
    name: "Test",
    profilePic: require("@/assets/images/profile2.png"),
  },
  { id: 6, name: "Mahsa", profilePic: "" },
];

const App = () => {
  return (
      <View>
         <ChatListScreen chats={chats} />
      <Link href="./Test">About</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
    padding: 30,
    backgroundColor: "#fff",
    color: "gray",
    display: "flex",
  },
  border: {
    borderColor: "gray",
    borderStyle: "solid",
    borderRadius: 8,
    borderWidth: 1,
  },
  title: { textAlign: "center", fontWeight: "bold", color: "gray" },
  leftSide: {},
  rightSide: { padding: 10 },
  userContainer: { marginBottom: 10 },
});
export default App;
