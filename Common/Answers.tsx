import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Card from "./Card";

export default function Answers(props: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.answersData && props.answersData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => props.handle(item, props.rightAnswer)}
          >
            <Card style={{ color: "white" }} item={item}></Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 1,
    borderColor: "red",
    borderWidth: 1,
  },
});
