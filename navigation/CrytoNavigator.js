import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Foundation,
  Entypo,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import colors from "../constants/colors";
import HomeScreen from "../screens/HomeScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import PriceDetailScreen from "../screens/PriceDetailScreen";
import PriceListScreen from "../screens/PriceListScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CryptoTradeScreen from "../screens/CryptoTradeScreen";

const HomeStack = createNativeStackNavigator();

const navTabBarOptions = {
  headerShown: false,
  showLabel: false,
  tabBarLabelStyle: {
    paddingBottom: 3,
    fontSize: 12,
  },
};

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home " component={HomeScreen} />
      <HomeStack.Screen name="PriceDetail" component={PriceDetailScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings " component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

const PortfolioStack = createNativeStackNavigator();

function PortfolioStackScreen() {
  return (
    <PortfolioStack.Navigator>
      <PortfolioStack.Screen name="Portfolio " component={PortfolioScreen} />
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

const TradeCryptoStack = createNativeStackNavigator();

function TradeCryptoStackScreen() {
  return (
    <TradeCryptoStack.Navigator>
      <TradeCryptoStack.Screen
        name="Crypto Trade Screen"
        component={CryptoTradeScreen}
      />
    </TradeCryptoStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function CrtyptoStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <Foundation
                name="home"
                size={30}
                color={focused ? colors.primary : colors.tabScreenSecondary}
              />
            );
          } else if (route.name === "Portfolio") {
            return (
              <Entypo
                name="briefcase"
                size={26}
                color={focused ? colors.primary : colors.tabScreenSecondary}
              />
            );
          } else if (route.name === "TradeCrypto") {
            return (
              <MaterialIcons
                padding={10}
                name="swap-horizontal-circle"
                size={50}
                color={colors.primary}
                style={{
                  width: 50,
                  height: 70,
                }}
              />
            );
          } else if (route.name === "Prices") {
            return (
              <MaterialIcons
                name="signal-cellular-alt"
                size={30}
                color={focused ? colors.primary : colors.tabScreenSecondary}
              />
            );
          } else if (route.name === "Settings") {
            return (
              <FontAwesome5
                name="user-alt"
                size={22}
                color={focused ? colors.primary : colors.tabScreenSecondary}
              />
            );
          }
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "tomato",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={navTabBarOptions}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioStackScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            paddingBottom: 3,
            fontSize: 12,
          },
        }}
      />
      <Tab.Screen
        name="TradeCrypto"
        component={TradeCryptoStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="Prices"
        component={PricesStackScreen}
        options={navTabBarOptions}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={navTabBarOptions}
      />
    </Tab.Navigator>
  );
}
