import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

const PriceListElement = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name="bitcoin" size={36} color="#F8A33C" />
        <Text style={styles.coinName}>{props.coinName}</Text>
      </View>
      <View></View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{props.price}</Text>
        <Text style={styles.change}>{props.change}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    flexDirection: "row",
  },
  coinName: {
    fontSize: 18,
    marginLeft: 12,
    alignSelf: "center",
  },
  priceContainer: {},
  price: {
    alignSelf: "flex-end",
  },
  change: {
    alignSelf: "flex-end",
  },
});

export default PriceListElement;
