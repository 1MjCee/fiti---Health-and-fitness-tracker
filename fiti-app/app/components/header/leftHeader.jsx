import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const LeftHeader = ({ iconName, size = 30, color = "black" }) => {
  return (
    <View>
      <Icon name={iconName} size={size} color={color} />
    </View>
  );
};

export default LeftHeader;
