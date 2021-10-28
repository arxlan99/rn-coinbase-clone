import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import PortfolioScreen from "./screens/PortfolioScreen";
import PriceDetailScreen from "./screens/PriceDetailScreen";
import PriceListScreen from "./screens/PriceListScreen";
import SettingsScreen from "./screens/SettingsScreen";
import CrytopTradeScreen from "./screens/CrytopTradeScreen";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home Screen" component={HomeScreen} />
      <HomeStack.Screen name="PriceDetail" component={PriceDetailScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings Screen" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

const PortfolioStack = createNativeStackNavigator();

function PortfolioStackScreen() {
  return (
    <PortfolioStack.Navigator>
      <PortfolioStack.Screen
        name="Portfolio Screen"
        component={PortfolioScreen}
      />
    </PortfolioStack.Navigator>
  );
}

const PricesStack = createNativeStackNavigator();

function PricesStackScreen() {
  return (
    <PricesStack.Navigator>
      <PricesStack.Screen name="Price List" component={PriceListScreen} />
    </PricesStack.Navigator>
  );
}

function TradeCryptoStackScreen() {
  return (
    <TradeCryptoStack.Navigator>
      <TradeCryptoStack.Screen
        name="Crytop Trade Screen"
        component={CrytopTradeScreen}
      />
    </TradeCryptoStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return (
                <Ionicons
                  name={
                    focused
                      ? "ios-information-circle"
                      : "ios-information-circle-outline"
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Settings") {
              return (
                <Ionicons
                  name={focused ? "ios-list-box" : "ios-list"}
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "tomato",
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Portfolio" component={PortfolioStackScreen} />
        <Tab.Screen name="TradeCrypto" component={TradeCryptoStackScreen} />
        <Tab.Screen name="Price" component={PricesStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
