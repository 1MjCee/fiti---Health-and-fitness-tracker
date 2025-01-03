import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { format } from "date-fns";
import { Image } from "react-native";
import Header from "../components/header/header";
import moment from "moment";

const placeholderImage = "https://www.w3schools.com/w3images/avatar2.png";

export default function Home() {
  const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header icon="home" text={currentDate} image />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
  },
});
