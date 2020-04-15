import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import { useColorScheme } from "react-native-appearance";

export default function GPS() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });

  let lat = "Waiting..";
  if (errorMsg) {
    lat = errorMsg;
  } else if (location) {
    lat = JSON.stringify(location.coords.latitude);
  }
  let long = "Waiting..";
  if (errorMsg) {
    long = errorMsg;
  } else if (location) {
    long = JSON.stringify(location.coords.longitude);
  }

  let heading = "Waiting..";
  if (errorMsg) {
    heading = errorMsg;
  } else if (location) {
    heading = JSON.stringify(location.coords.heading);
  }

  if (useColorScheme() === "dark") {
    return (
      <View style={styles.container}>
        <Text style={styles.textDarkHead}>Location {"\n"}</Text>
        <Text style={styles.textDark}>Latitude: {lat}</Text>
        <Text style={styles.textDark}>Longitude: {long}</Text>
        <Text style={styles.textDark}>Heading: {heading}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.textLightHead}>Location {"\n"}</Text>
        <Text style={styles.textLight}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  textDark: {
    color: "white",
    alignSelf: "center",
    fontSize: 18,
    textAlign: "center",
  },
  textLight: {
    alignSelf: "center",
    fontSize: 18,
    textAlign: "center",
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
