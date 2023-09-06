import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement login functionality here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Netflix Clone</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            paddingTop: 10,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Login
        </Text>
      </Pressable>
      <Text
        style={styles.registerLink}
        onPress={() => navigation.navigate("Register")}
      >
        Don't have an account? Register here
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  input: {
    width: "90%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 18,
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
  registerLink: {
    marginTop: 20,
    color: "white",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "blue",
    borderRadius: 5,
  },
});

export default LoginScreen;
