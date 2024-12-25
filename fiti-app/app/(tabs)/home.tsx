import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { format } from "date-fns";
import { Image } from "react-native";

const placeholderImage = "https://www.w3schools.com/w3images/avatar2.png";

export default function Home() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "eeee d MMMM");

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Icon name="calendar-today" size={30} color="black" />
        </View>
        <View>
          <Text>{formattedDate}</Text>
        </View>
        <View>
          <Image source={{ uri: placeholderImage }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
  },
  iconContainer: {
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 50,
  },
});
