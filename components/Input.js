import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  return (
    <TextInput {...props} style={{ ...styles.inputText, ...props.style }} />
  );
};

const styles = StyleSheet.create({
  inputText: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
