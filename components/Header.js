import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingTop: 30,
    height: 90,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Header;
