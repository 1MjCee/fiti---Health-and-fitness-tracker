import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const LeftHeader = ({ icon, size = 30, color = "black" }) => {
  return (
    <View>
      <Icon name={icon} size={size} color={color} />
    </View>
  );
};

export default LeftHeader;
