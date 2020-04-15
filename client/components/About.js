import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useColorScheme } from "react-native-appearance";

export default function About() {
  if (useColorScheme() === "dark") {
    return (
      <View style={styles.container}>
        <Text style={styles.textDarkHead}>About {"\n"}</Text>
        <Text style={styles.textDark}>
          I created this app to allow users to explore all the different sensors
          in a modern smartphone
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.textLightHead}>About {"\n"}</Text>
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
    maxWidth: 350,
  },
  textLight: {
    color: "black",
    alignSelf: "center",
    textAlign: "center",
    maxWidth: 350,
  },
  textDarkHead: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
  },
  textLightHead: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 35,
  },
});
