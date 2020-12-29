import React from "react";
import { StyleSheet, View, Text, StatusBar, FlatList } from "react-native";
import { all_cagories } from "../assets/FakeDatas/datas";
import ButtonComponent from "../Common/Button";

export default function HomePage({ navigation }: any) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor="#141414" translucent={true} />
      <View style={styles.wrapper}>
        <Text style={styles.text}>Categories</Text>
        <FlatList
          data={all_cagories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                width: 200,
                paddingBottom: 10,
              }}
            >
              <ButtonComponent
                dispatch={item.dispatch}
                name={item.name}
                navigation={navigation}
              />
            </View>
          )}
        />
      </View>
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
  button: {
    width: 100,
    backgroundColor: "black",
  },
  wrapper: {
    position: "relative",
    top: "15%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    paddingTop: 15,
    paddingBottom: 15,
  },
});
