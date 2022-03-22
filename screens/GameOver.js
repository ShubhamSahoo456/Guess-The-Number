import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
} from "react-native";
import BodyText from "../components/BodyText";

const GameOver = (props) => {
  return (
    <ScrollView>
      <View style={styles.gameOver}>
        <BodyText>The Game is Over!</BodyText>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/game-over-poster-design-template-f479214fda20e2267202e03bcbdba176_screen.jpg?ts=1616307820",
            }}
            fadeDuration={300}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <BodyText>Number of rounds: {props.rounds}</BodyText>
        <BodyText>The Number was : {props.choosenNumber}</BodyText>
        <Button title="NEW GAME" onPress={props.newGameHandler} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gameOver: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderWidth: 3,
    marginVertical: 20,
    borderColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOver;
