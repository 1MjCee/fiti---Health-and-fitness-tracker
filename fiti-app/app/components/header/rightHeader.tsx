import { ImageSource } from "@/types";
import React from "react";
import { View, Image, StyleSheet } from "react-native";

interface RightComponentProps {
  image: ImageSource;
}

const rightHeader: React.FC<RightComponentProps> = ({ image }) => {
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
    width: 40, // Adjust the width as per your design
    height: 40, // Adjust the height as per your design
    borderRadius: 20, // Circular image, modify if you need square/rectangular shape
  },
});

export default rightHeader;
