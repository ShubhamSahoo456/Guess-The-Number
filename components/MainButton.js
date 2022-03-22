import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../constants/colors";

const MainButton = (props) => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
        <View style={{ ...styles.mainButtonContainer, ...props.style }}>
          <Text style={styles.mainButtonText}>{props.children}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  mainButtonContainer: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  mainButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default MainButton;
