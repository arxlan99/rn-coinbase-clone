import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import colors from "../constants/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import TransparentButton from "../components/UI/TransparentButton";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.email}>john_doe@gmail.com</Text>
        <Text style={styles.title}>John Doe</Text>
      </View>
      <View style={styles.box}>
        <View stlye={styles.textContainer}>
          <Text style={styles.boxText}>Share your love of crypto</Text>
          <Text style={styles.boxText}>and get $10 free of Bitcoin</Text>
        </View>
        <FontAwesome5
          name="box"
          size={36}
          color="#FFA9BA"
          style={{ alignSelf: "center" }}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={[styles.title, { marginBottom: 20 }]}>
          Payment Methods
        </Text>
        <TransparentButton text={"Add a payment method"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  email: {
    fontWeight: "600",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  box: {
    marginTop: 20,
    elevation: 5,
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  /* textContainer: {
    marginStart: 20,
  }, */
  boxText: {
    fontSize: 18,
  },
});

export default SettingsScreen;
