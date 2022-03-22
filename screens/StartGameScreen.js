import React, { useState } from "react";
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";

const StartGameScreen = (props) => {
  const [textInput, setTextInput] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [choosenNum, setChoosenNum] = useState();
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );

  const inputTextHandler = (text) => {
    setTextInput(text.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setTextInput("");
    setConfirmed(false);
    setChoosenNum();
  };

  const confirmInputHandler = () => {
    if (isNaN(parseInt(textInput)) || textInput <= 0 || textInput > 99) {
      Alert.alert("Invalid Number", "Number Should be between 1-99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setChoosenNum(parseInt(textInput));
    setTextInput("");
    Keyboard.dismiss();
  };

  let confirmNum;
  if (confirmed) {
    confirmNum = (
      <Card style={styles.choosenContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{choosenNum}</NumberContainer>
        <MainButton
          style={styles.startGameBtn}
          onPress={() => props.startGame(choosenNum)}
        >
          Start Game
        </MainButton>
      </Card>
    );
  }

  return (
    <>
      <ScrollView>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={22}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
              <Text style={styles.title}>Start A New Game</Text>
              <Card style={styles.inputContainer}>
                <BodyText style={{ fontFamily: "open-sans-regular" }}>
                  Select a Number
                </BodyText>
                <Input
                  style={styles.input}
                  value={textInput}
                  onChangeText={inputTextHandler}
                  keyboardType="number-pad"
                  maxLength={2}
                />
                <View style={styles.buttonContainer}>
                  <MainButton
                    style={styles.reset_btn}
                    onPress={resetInputHandler}
                  >
                    Reset
                  </MainButton>
                  <MainButton
                    style={styles.confirm_btn}
                    onPress={confirmInputHandler}
                  >
                    Confirm
                  </MainButton>
                </View>
              </Card>
              {confirmNum}
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
    fontFamily: "open-sans-regular",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  reset_btn: {
    backgroundColor: Colors.primary,
    width: 100,
    borderRadius: 5,
  },
  confirm_btn: {
    backgroundColor: Colors.accent,
    width: 100,
    borderRadius: 5,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  choosenContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  startGameBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
  },
});

export default StartGameScreen;
