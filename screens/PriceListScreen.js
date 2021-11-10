import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import colors from "../constants/colors";
import { priceData } from "../data";

import PriceListElement from "../components/UI/PriceListElement";

const PriceListScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subTitle}>In the past 24 hours</Text>
      </View>
      <View>
        <Text style={styles.title}>Market is down</Text>
      </View>
      <View style={styles.textListContainer}>
        <Text style={styles.textActive}>All assets</Text>
        <Text>Tradable</Text>
        <Text>Gainers</Text>
        <Text>Losers</Text>
      </View>
      <ScrollView>
        {priceData.map((item, index) => {
          return (
            <PriceListElement
              key={index}
              icon={item.icon}
              coinName={item.coinName}
              price={item.price}
              change={item.change}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  subTitle: {
    fontWeight: "bold",
    color: colors.fontGrey,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textActive: {
    color: colors.primary,
  },
  textListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 8,
  },
});

export default PriceListScreen;
