import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import colors from "../constants/colors";
import { listData } from "../data";

import ListItem from "../components/UI/ListItem";

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Portfolio Balance</Text>
        <Text style={styles.portfolioBalance}>$0.00</Text>
      </View>
      <ScrollView>
        {listData.map((item, index) => {
          return (
            <ListItem
              key={index}
              icon={item.icon}
              coinName={item.coinName}
              price={item.price}
              balance={item.balance}
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
  title: {
    color: colors.fontGrey,
    fontWeight: "bold",
    marginBottom: 5,
  },
  portfolioBalance: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default PortfolioScreen;
