import React from "react";
import { StyleSheet, Text } from "react-native";

const BodyText = (props) => {
  return (
    <>
      <Text style={styles.text}>{props.children}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans-regular",
    fontSize: 16,
  },
});

export default BodyText;
