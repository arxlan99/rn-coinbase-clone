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
import IntroCard from "../components/UI/IntroCard";
import { color } from "react-native-reanimated";

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
    <ScrollView style={{ flex: 1 }}>
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

        <ScrollView style={{ flex: 1 }} horizontal={true}>
          <View style={styles.textListContainer}>
            {changePriceData.map((item, index) => (
              <View key={index} style={styles.infoCard}>
                <PriceChangeCard price="$0.00002613" change="-24.49%" />
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.learnTitleContainer}>
          <Text style={styles.learnText}>Learn about Fetch.ai</Text>
        </View>
        <View style={styles.lessonContainer}>
          <FontAwesome name="circle" size={52} color="black" />
          <View>
            <Text style={styles.learnText}>Fetch.ai</Text>
            <Text style={[styles.learnText, { color: colors.fontGrey }]}>
              Earn $3 FET
            </Text>
          </View>
          <Text style={styles.lessonButton}>Start lesson</Text>
        </View>
        <View>
          <Text style={{ color: colors.fontGrey, fontSize: 18, marginTop: 10 }}>
            A protocol for automating tasks with AI.
          </Text>
        </View>
        <ScrollView style={{ flex: 1 }} horizontal={true}>
          <View style={styles.textListContainer}>
            <View style={styles.infoCard}>
              <IntroCard />
            </View>
            <View style={styles.infoCard}>
              <IntroCard />
            </View>
            <View>
              <IntroCard />
            </View>
          </View>
        </ScrollView>
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
    marginTop: 20,
  },

  textListContainer: {
    flexDirection: "row",
    padding: 5,
  },
  learnTitleContainer: {
    marginTop: 40,
  },
  learnText: {
    fontSize: 23,
  },
  lessonContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  lessonButton: {
    fontSize: 20,
    color: "#0851EC",
  },
  infoCard: {
    marginRight: 20,
  },
});

export default HomeScreen;
