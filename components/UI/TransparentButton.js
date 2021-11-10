import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const TransparentButton = (props) => {
  return (
    <Pressable style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: props.color ? props.color : "" }]}>
          {props.text}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  textContainer: {
    padding: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default TransparentButton;
