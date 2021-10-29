import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, Image, Pressable } from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import colors from "../constants/colors";
import { Dimensions } from "react-native";

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
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/images/wallet.png")} />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Welcome to Coinbase !</Text>
        <Text style={styles.subTitle}>Make your first investment today</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.paymentButton} activeOpacity={0.7}>
          <Text style={styles.buttonText}>asddas</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>Watchlist</Text>
        <Pressable
          onPress={() => navigation.navigate("Watchlist")}
          style={styles.watchlist}
        >
          <Text>asd</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.title}>Top Movers</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
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
    height: 40,
    width: windowWidth / 1.2,
    borderRadius: 10,
    backgroundColor: colors.primary,
    marginTop: 20,
  },

  buttonText: {
    fontSize: 15,
    color: "white",
    height: "100%",
    textAlign: "center",
    alignItems: "center",
    height: "100%",
  },

  watchlist: {},
});

export default HomeScreen;
