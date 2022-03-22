import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Alert,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import BodyText from "../components/BodyText";

const randomNumGenerator = (min, max, exclude) => {
  console.log(min, max, exclude);
  min = Math.ceil(min);
  max = Math.floor(max);
  let ranDum = Math.floor(Math.random() * (max - min)) + min;

  return ranDum;
};

const OpponentNumView = (number, round) => (
  <View style={styles.listItems} key={number.toString()}>
    <BodyText>#{round}</BodyText>
    <BodyText>{number}</BodyText>
  </View>
);

const GameScreen = (props) => {
  const [guessnum, setGuessNum] = useState(
    randomNumGenerator(1, 100, props.choosenNumber)
  );
  const [gameScreenHeight, setGameScreenHeight] = useState(
    Dimensions.get("window").height
  );
  const [rounds, setRounds] = useState(0);
  const [pastGuess, setPastGuess] = useState([guessnum]);
  const currentlow = useRef(1);
  const currentHigh = useRef(100);

  const guessRightNumberHandler = (direction) => {
    if (
      (direction === "lower" && guessnum < props.choosenNumber) ||
      (direction === "higher" && guessnum > props.choosenNumber)
    ) {
      Alert.alert("Don't lie!", "You Know this is wrong", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = guessnum;
    } else {
      currentlow.current = guessnum + 1;
    }
    const newNumber = randomNumGenerator(
      currentlow.current,
      currentHigh.current,
      props.choosenNumber
    );
    console.log(newNumber);
    setGuessNum(newNumber);
    setRounds((rounds) => rounds + 1);
    setPastGuess((guess) => [...guess, newNumber]);
  };

  useEffect(() => {
    if (guessnum === props.choosenNumber) {
      props.onGameOver(rounds);
    }
  }, [guessnum, props.onGameOver, props.choosenNumber]);

  useEffect(() => {
    console.log("reached");
    const updateLayout = () => {
      setGameScreenHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  if (gameScreenHeight < 500) {
    return (
      <View style={styles.gameContainer}>
        <Text style={styles.title}>Opponent's Guess</Text>
        <View style={styles.controls}>
          <MainButton
            style={styles.lowUppBtn}
            onPress={guessRightNumberHandler.bind(this, "lower")}
          >
            <Ionicons name="remove" size={30} />
          </MainButton>
          <NumberContainer>{guessnum}</NumberContainer>
          <MainButton
            style={styles.lowUppBtn}
            onPress={guessRightNumberHandler.bind(this, "higher")}
          >
            <Ionicons name="add" size={30} />
          </MainButton>
        </View>
        <View style={styles.list}>
          <ScrollView contentContainerStyle={styles.listContent}>
            {pastGuess.map((num, index) =>
              OpponentNumView(num, pastGuess.length - index)
            )}
          </ScrollView>
        </View>
      </View>
    );
  }

  return (
    <>
      <View style={styles.gameContainer}>
        <Text style={styles.title}>Opponent's Guess</Text>
        <NumberContainer>{guessnum}</NumberContainer>
        <Card style={styles.buttonContainer}>
          <MainButton
            style={styles.lowUppBtn}
            onPress={guessRightNumberHandler.bind(this, "lower")}
          >
            <Ionicons name="remove" size={30} />
          </MainButton>
          <MainButton
            style={styles.lowUppBtn}
            onPress={guessRightNumberHandler.bind(this, "higher")}
          >
            <Ionicons name="add" size={30} />
          </MainButton>
        </Card>
        <View style={styles.list}>
          <ScrollView contentContainerStyle={styles.listContent}>
            {pastGuess.map((num, index) =>
              OpponentNumView(num, pastGuess.length - index)
            )}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: 300,
    justifyContent: "space-around",
    marginVertical: 10,
    maxWidth: "80%",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
    fontWeight: "500",
  },
  lowUppBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "60%",
    flex: 1,
  },
  listItems: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
  },
  listContent: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  controls: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default GameScreen;
