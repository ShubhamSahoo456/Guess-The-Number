import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const getAllFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/open-sans.ttf"),
    "open-sans-regular": require("./assets/fonts/open-sans-regular.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [playrounds, setPlayRounds] = useState(0);
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={getAllFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const startGameHandler = (userNum) => {
    setUserNumber(userNum);
  };

  const onGameOverHandler = (rounds) => {
    setPlayRounds(rounds);
  };

  const newGameHandler = () => {
    setPlayRounds(0);
    setUserNumber(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Guess The Number" />
      {userNumber && playrounds <= 0 ? (
        <GameScreen choosenNumber={userNumber} onGameOver={onGameOverHandler} />
      ) : userNumber && playrounds > 0 ? (
        <GameOver
          choosenNumber={userNumber}
          rounds={playrounds}
          newGameHandler={newGameHandler}
        />
      ) : (
        <StartGameScreen startGame={startGameHandler} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
