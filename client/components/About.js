import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useColorScheme } from "react-native-appearance";

export default function About(props) {
  if (useColorScheme() === "dark") {
    return (
      <View style={styles.container}>
        <Text>About:</Text>
        <Text style={styles.textDark}>
          I created this app to allow users to explore all the different sensors
          in a modern smartphone
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>About:</Text>
        <Text style={styles.textLight}>
          I created this app to allow users to explore all the different sensors
          in a modern smartphone
        </Text>
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
    alignSelf: "center",
    textAlign: "center",
  },
  textLight: {
    color: "black",
    alignSelf: "center",
    textAlign: "center",
  },
});
