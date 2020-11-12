import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Samuel", key: "1" },
    { name: "Jose", key: "2" },
    { name: "Vicent", key: "3" },
    { name: "Miguel", key: "4" },
    { name: "Kevin", key: "5" },
    { name: "Fernando", key: "6" },
    { name: "Mario", key: "7" },
  ]);

  return (
    <View style={styles.container}>
      <Text>List of people:</Text>
      <ScrollView>
        {people.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
