import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import CrtyptoStack from "./navigation/CrytoNavigator";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <CrtyptoStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}
