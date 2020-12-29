import React, { useEffect, useReducer, useState } from "react";
import { deneme } from "../assets/FakeDatas/datas";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { reducer } from "../reducer/reducer";
import Answers from "../Common/Answers";
import ModalComponent from "../Common/Modal";

export default function QuestionsPage({ navigation }: any) {
  const [state, dispatch] = useReducer(reducer, []);
  const [openModal, setOpenModal] = useState(false);
  const [calc, setCalc] = useState(0);
  const [point, setPoint] = useState(0);
  const [modalData, setModalData] = useState({
    borderColor: "",
    text: "",
    buttonText: "",
  });
  useEffect(() => {
    if (state === undefined || state.length === 0) {
      dispatch({ type: navigation.state.params, state: deneme });
    }
    if (calc === 10) {
      setOpenModal(true);
      console.log(openModal);
      setModalData({
        borderColor: "green",
        text: "Congratulations, You Are Winer",
        buttonText: "Go to Home Page",
      });
    } else {
      dispatch({ type: navigation.state.params, state: deneme });
    }
  }, [navigation.state.params, calc]);

  const handle = (answer: string, rightAnswer: string) => {
    if (answer === rightAnswer) {
      setOpenModal(false);
      setCalc(calc + 1);
      console.log(calc);
      setPoint(point + 100);
    } else {
      setModalData({
        borderColor: "red",
        text: "Game Over",
        buttonText: "Restrart",
      });
      setOpenModal(true);
    }
  };
  const goBackButton = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.pointTableContainer}>
        <Text style={styles.pointTableText}>
          Question: {calc + 1 === 11 ? 10 : calc + 1} /{" "}
          {state.data && state.data.length}
        </Text>
        <Text style={styles.pointTableText}>Point: {point}</Text>
      </View>
      <ModalComponent
        openModal={openModal}
        goBackButton={goBackButton}
        modalData={modalData}
      />
      <FlatList
        data={state && state.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            {calc === index ? (
              <View>
                <Text style={styles.question}>{item.question}</Text>
                <Answers
                  answersData={item.answers}
                  rightAnswer={item.rightAnswer}
                  handle={handle}
                />
              </View>
            ) : null}
          </View>
        )}
      />
      <TouchableOpacity onPress={() => goBackButton()}>
        <Text style={styles.goBackgButton}>Go Back</Text>
      </TouchableOpacity>
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
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
  },
  pointTableContainer: {
    width: "90%",
    borderColor: "white",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    top: 100,
    height: 30,
    borderRadius: 5,
  },
  pointTableText: { color: "white" },
  goBackgButton: {
    color: "white",
    borderColor: "white",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 24,
    padding: 15,
    bottom: 20,
    width: 150,
    height: 50,
  },
});
