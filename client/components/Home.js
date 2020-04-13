import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home(props) {
  if (props.theme === "dark") {
    return (
      <View style={styles.container}>
        <Text style={styles.textDark}>Sensors</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
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
    backgroundColor: "white",
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
