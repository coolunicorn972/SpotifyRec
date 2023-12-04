import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // You can replace FontAwesome with your preferred icon library

export default function App() {
  const [inputText, setInputText] = useState("");
  const [posts, setPosts] = useState([
    {
      id: "1",
      author: "awesomeChihuahua",
      text: "This is the first post!",
      date: "2023-11-30",
    },
    {
      id: "2",
      author: "captainSnake",
      text: "Hello, React Native Forum!",
      date: "2023-12-01",
    },
    // Add more hardcoded posts as needed
  ]);

  const handleSend = () => {
    if (inputText.trim() !== "") {
      const newPost = {
        id: String(posts.length + 1),
        author: "coolunicorn", // Placeholder for the author (replace with user authentication)
        text: inputText,
        date: new Date().toISOString().split("T")[0], // Current date in 'YYYY-MM-DD' format
      };
      setPosts([...posts, newPost]);
      setInputText("");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Discover Friends and Tunes!</Text>
          <View style={{ flex: 1 }}>
            <FlatList
              data={posts}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.postContainer}>
                  <View style={styles.postHeader}>
                    <Text style={styles.author}>{item.author}</Text>
                    <Icon
                      name="user-plus"
                      size={20}
                      color="#1DB954"
                      style={styles.addFriendIcon}
                    />
                  </View>
                  <Text style={styles.postText}>{item.text}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
              )}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#FFFFFF" // White placeholder text color
              placeholder="Type your post here"
              value={inputText}
              onChangeText={(text) => setInputText(text)}
            />
            <TouchableOpacity onPress={handleSend} style={styles.postButton}>
              <Icon name="send" size={20} color="#1DB954" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#121212", // Spotify-like background color
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#1DB954", // Spotify green color
  },
  postContainer: {
    borderWidth: 1,
    borderColor: "#FFFFFF", // White border color
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#282828", // Darker background color
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  author: {
    fontWeight: "bold",
    color: "#1DB954", // Spotify green color
  },
  addFriendIcon: {
    marginLeft: "auto",
  },
  postText: {
    marginBottom: 8,
    color: "#FFFFFF", // White text color
  },
  date: {
    color: "#888",
    fontSize: 12,
    color: "#FFFFFF", // White text color
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#FFFFFF", // White border color
    borderRadius: 8,
    marginRight: 8,
    padding: 8,
    color: "#FFFFFF", // White text color
  },
  postButton: {
    backgroundColor: "#282828", // Darker background color
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
