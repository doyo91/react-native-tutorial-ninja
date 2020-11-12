import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Samuel");
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text></Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={() => setName("doyo")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
