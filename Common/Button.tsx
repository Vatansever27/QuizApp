import React, { useReducer } from "react";
import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";

export default function ButtonComponent(props: any) {
  const buton = (title: string) => {
    props.navigation.navigate("QuestionsPage", props.dispatch);
  };
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => buton(props.title)}>
        <Text style={styles.customBtnBG}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#141414",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContainer: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  customBtnBG: {
    color: "white",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 1.5,
    width: "100%",
    padding: 10,
    borderRadius: 10,
  },
});
