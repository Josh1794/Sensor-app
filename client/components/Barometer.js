import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Barometer } from "expo-sensors";
import { useColorScheme } from "react-native-appearance";

export default function TabFive() {
  const theme = useColorScheme();

  const [data, setData] = useState({});

  useEffect(() => {
    _toggle();
  }, []);

  useEffect(() => {
    return () => {
      _unsubscribe();
    };
  }, []);

  const _toggle = () => {
    if (this._subscription) {
      _unsubscribe();
    } else {
      _subscribe();
    }
  };

  const _subscribe = () => {
    this._subscription = Barometer.addListener((barometerData) => {
      setData(barometerData);
    });
  };

  const _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  const { pressure = 0 } = data;
  if (theme === "dark") {
    return (
      <View style={styles.sensor}>
        <Text style={styles.textDarkHead}>Barometer {"\n"}</Text>
        <Text style={styles.textDark}>{pressure * 100} Pa</Text>
        <Text style={styles.textDark}>or</Text>
        <Text style={styles.textDark}>
          {((pressure * 100) / 101325).toFixed(4)} atm {"\n"}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={_toggle} style={styles.button}>
            <Text>Toggle</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.sensor}>
        <Text style={styles.textLightHead}>Barometer {"\n"}</Text>

        <Text style={styles.textLight}>{pressure * 100} Pa</Text>
        <Text style={styles.textLight}>or</Text>
        <Text style={styles.textLight}>
          {((pressure * 100) / 101325).toFixed(4)} atm {"\n"}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={_toggle} style={styles.button}>
            <Text>Toggle</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 4,
  },
  sensor: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  textDark: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  textLight: {
    textAlign: "center",
    fontSize: 20,
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
