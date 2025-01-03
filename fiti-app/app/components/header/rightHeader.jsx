import React from "react";
import { View, Image, StyleSheet } from "react-native";

const RightHeader = ({ image }) => {
  const defaultImage = "https://via.placeholder.com/150";

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default RightHeader;
