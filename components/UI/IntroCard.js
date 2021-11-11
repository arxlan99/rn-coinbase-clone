import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

const IntroCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View>
          <FontAwesome name="circle" size={48} color="#F2C303" />
        </View>
        <View style={styles.doubleCard}>
          <FontAwesome
            name="circle"
            size={48}
            color="#FA8DFF"
            style={{ marginRight: 30 }}
          />
          <FontAwesome name="circle" size={48} color="#0DC6FE" />
        </View>
        <View>
          <FontAwesome name="circle" size={48} color="black" />
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          borderBottomColor: "#DFDFE1",
        }}
      />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.infoTextTitle}>What is Fetch.ai?</Text>
        </View>
        <View>
          <Text style={styles.content}>Earn $1 FET . 1 min</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 1.2,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  doubleCard: {
    flexDirection: "row",
  },
  textContainer: {
    margin: 20,
  },
  infoTextTitle: {
    fontSize: 20,
  },
  content: {
    fontSize: 18,
  },
});

export default IntroCard;
