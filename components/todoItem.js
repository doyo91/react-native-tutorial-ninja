import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const TodoItem = ({ item, pressHandler }) => {
  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <MaterialIcons style={styles.delete} name="delete" />
      </TouchableOpacity>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  text: {
    paddingRight: 10,
  },
  delete: {
    padding: 10,
    color: "coral",
    fontSize: 22,
  },
});
