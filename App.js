import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import CrtyptoStack from "./navigation/CrytoNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <CrtyptoStack />
    </NavigationContainer>
  );
}
