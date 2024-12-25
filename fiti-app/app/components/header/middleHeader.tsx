import React from "react";
import { View, Text, StyleSheet } from "react-native";

const midddleHeader = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text || "No Content"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default midddleHeader;
