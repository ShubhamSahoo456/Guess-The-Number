import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <>
      <View style={styles.numContainer}>
        <Text style={styles.number}>{props.children}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  numContainer: {
    borderColor: Colors.accent,
    borderWidth: 6,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  number: {
    fontSize: 22,
    color: Colors.accent,
    fontWeight: "600",
  },
});

export default NumberContainer;
