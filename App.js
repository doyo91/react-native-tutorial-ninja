import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { AddTodo } from "./components/addTodo";
import { Header } from "./components/header";
import { TodoItem } from "./components/todoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Comprar", key: "1" },
    { text: "Mitja", key: "2" },
    { text: "Deporte", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
