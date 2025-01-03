import React from "react";
import { Text, View, StyleSheet } from "react-native";
import LeftHeader from "./leftHeader";
import RightHeader from "./rightHeader";
import MiddleHeader from "./middleHeader";

const Header = ({ icon, text, image }) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <LeftHeader icon={icon} />
      </View>
      <View>
        <MiddleHeader text={text} />
      </View>
      <View>
        <RightHeader image={image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
  },
});

export default Header;
