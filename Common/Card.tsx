import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Card(props: any) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContainer}>
        <Text style={styles.text}>{props.item}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    marginHorizontal: 4,
    marginVertical: 6,
    backgroundColor: "#141414",
    fontSize: 22,
    borderColor: "white",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 50,
  },
  cardContainer: {
    marginHorizontal: 8,
    marginVertical: 3,
  },
  text: {
    color: "white",
  },
});
