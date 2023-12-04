// LoginScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-elements";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username!"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        title="Login"
        buttonStyle={styles.loginButton}
        titleStyle={styles.buttonText}
        onPress={() => navigation.navigate("ArtistSearch")}
      />
      <Button
        title="Sign Up"
        buttonStyle={styles.signUpButton}
        titleStyle={styles.buttonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#001A33", // Cool Deep Blue
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    fontFamily: "AvenirNext-DemiBold", // Change to your preferred font
  },
  input: {
    height: 40,
    width: 250,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: "#00ADEF", // Cool Deep Blue
    width: 250,
    height: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
  signUpButton: {
    backgroundColor: "#FF4384", // Pink
    width: 250,
    height: 50,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "AvenirNext-DemiBold", // Change to your preferred font
  },
});

export default LoginScreen;
