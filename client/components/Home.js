import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "react-native-appearance";

export default function Home(props) {
  const navigation = useNavigation();

  if (useColorScheme() === "dark") {
    return (
      <View style={styles.container}>
        <Button onPress={() => navigation.toggleDrawer()} title="Toggle" />
        <Text style={styles.textDark}>Sensors</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Button onPress={() => navigation.toggleDrawer()} title="Toggle" />
        <Text style={styles.textLight}>Sensors </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textDark: {
    color: "white",
    fontSize: 40,
  },
  textLight: {
    color: "black",
    fontSize: 40,
  },
});
