import React from "react";
import { Text, View, Image, TextInput, StyleSheet } from "react-native";

function HomeScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>
        Welcome to Tanzania, the land of mount Kilimanjaro
      </Text>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={{ height: 300, width: 300 }}
        resizeMode="cover"
      ></Image>

      <TextInput placeholder="Email" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
  },
});

export default HomeScreen;
