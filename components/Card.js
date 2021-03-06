import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.65,
    shadowRadius: 6,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 8,
  },
});

export default Card;
