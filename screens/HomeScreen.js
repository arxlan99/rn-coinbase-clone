import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import colors from "../constants/colors";
import { Dimensions } from "react-native";
import { FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import PriceChangeCard from "../components/UI/PriceChangeCard";

import { changePriceData } from "../data";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HomeScreen = ({ navigation }) => {
  /* useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Info"
          onPress={() => navigation.navigate("PriceDetail")}
        />
      ),
    });
  }, [navigation]); */

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image source={require("../assets/images/wallet.png")} />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Welcome to Coinbase !</Text>
          <Text style={styles.subTitle}>Make your first investment today</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.paymentButton} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Add payment method</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[styles.title, styles.watchlist]}>Watchlist</Text>
          <Pressable
            onPress={() => navigation.navigate("Watchlist")}
            style={styles.card}
          >
            <View style={styles.cardItemIcon}>
              <FontAwesome
                name="btc"
                size={36}
                color="white"
                style={[
                  {
                    transform: [{ skewY: "20deg" }],
                  },
                ]}
              />
            </View>
            <View style={styles.cardItemName}>
              <Text style={styles.cardItemNameTitle}>Bitcoin</Text>
              <Text style={styles.cardItemNameSub}>Btc</Text>
            </View>
            <View style={styles.cardItemLine}>
              <SimpleLineIcons name="graph" size={24} color="black" />
            </View>
            <View style={styles.cardItemPrice}>
              <Text>$54,223.15</Text>
              <Text>+0.10%</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.topMovers}>
          <Text style={styles.title}>Top Movers</Text>
        </View>

        <View style={styles.textListContainer}>
          {changePriceData.map((item, index) => (
            <PriceChangeCard key={index} price="$0.00002613" change="-24.49%" />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 30,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 50,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    marginTop: 5,
    color: colors.fontGrey,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  paymentButton: {
    height: 50,
    width: windowWidth / 1.2,
    borderRadius: 10,
    backgroundColor: colors.primary,
    marginTop: 20,
    alignItems: "center",
    padding: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
  watchlist: {
    marginTop: 20,
    marginBottom: 30,
  },
  card: {
    width: windowWidth / 1.2,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  cardItemIcon: {
    backgroundColor: "#F8A33C",
    borderRadius: 50,
    width: 50,
    height: 50,
    textAlign: "center",
    alignItems: "center",
    padding: 5,
  },
  cardItemName: {
    flex: 1,
    paddingStart: 15,
  },
  cardItemNameTitle: {
    fontSize: 18,
  },
  cardItemNameSub: {
    textTransform: "uppercase",
  },
  cardItemLine: {},
  cardItemPrice: {},
  topMovers: {
    marginStart: 30,
    marginTop: 20,
  },

  textListContainer: {
    flexDirection: "row",
  },
});

export default HomeScreen;
