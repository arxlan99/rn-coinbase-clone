import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../constants/colors";

const windowWidth = Dimensions.get("window").width;

const PriceChangeCard = (props) => {
  return (
    <View>
      <View style={styles.card}>
        <MaterialCommunityIcons name="gold" size={42} color="#F4900C" />
        <Text style={styles.price}>{props.price}</Text>
        <Text style={styles.change}>{props.change}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 5,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: windowWidth / 2.8,
  },
  price: {
    marginTop: 20,
    color: colors.fontGrey,
    alignSelf: "flex-start",
    fontSize: 16,
  },
  change: {
    fontSize: 20,
    color: "red",
    alignSelf: "flex-start",
  },
});
export default PriceChangeCard;
