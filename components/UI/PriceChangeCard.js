import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../../constants/colors";

const PriceChangeCard = (props) => {
  return (
    <View>
      <View style={styles.card}>
        <FontAwesome5 name="money-bill-wave-alt" size={28} color="#F8A33C" />
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
    width: "45%",
    padding: 20,
    borderRadius: 10,
  },
  price: {
    color: colors.fontGrey,
    alignSelf: "flex-end",
  },
  change: {
    fontSize: 24,
    color: "red",
    alignSelf: "flex-end",
  },
});
export default PriceChangeCard;
