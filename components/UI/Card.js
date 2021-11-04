import React from "react";
import { View, Text } from "react-native";

const Card = (props) => {
  return (
    <View>
      <View>{props.icon}</View>
      <View>
        <Text>{props.price}</Text>
      </View>
      <View>
        <Text>{props.change}</Text>
      </View>
    </View>
  );
};

export default Card;
