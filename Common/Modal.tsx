import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";

let border_Color;
let buttonText;
let text;
export default function ModalComponent(props: any) {
  border_Color = props.modalData.borderColor;
  buttonText = props.modalData.buttonText;
  text = props.modalData.text;
  return (
    <View style={styles.container}>
      {props.openModal === true ? (
        <Modal
          animationType={"fade"}
          transparent={false}
          visible={props.openModal}
        >
          <View
            style={[
              styles.modal,
              { borderColor: `${props.modalData.borderColor}` },
            ]}
          >
            <Text style={styles.modalText}>{props.modalData.text}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => {
                  props.goBackButton();
                }}
              >
                <Text
                  style={[
                    styles.customBtnBG,
                    { borderColor: `${props.modalData.borderColor}` },
                  ]}
                >
                  {buttonText}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#141414",
  },
  question: {
    color: "white",
    fontSize: 24,
    paddingTop: 15,
    paddingBottom: 15,
  },
  questionContainer: {
    position: "relative",
    top: "25%",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141414",
    width: "100%",
    borderColor: "red",
    borderWidth: 1.5,
  },
  modalText: {
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    alignSelf: "center",
    width: "100%",
    height: 100,
    fontSize: 24,
  },
  buttonContainer: {
    backgroundColor: "#141414",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    alignSelf: "center",
    width: 200,
  },
  customBtnBG: {
    color: "white",
    textAlign: "center",
    borderColor: "red",
    borderWidth: 1.5,
    width: "100%",
    padding: 10,
    borderRadius: 10,
  },
});
