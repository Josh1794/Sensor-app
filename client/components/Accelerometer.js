import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Accelerometer } from "expo-sensors";
import { useColorScheme } from "react-native-appearance";

export default function TabFour() {
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

  const _slow = () => {
    Accelerometer.setUpdateInterval(1000);
  };

  const _fast = () => {
    Accelerometer.setUpdateInterval(16);
  };

  const _subscribe = () => {
    this._subscription = Accelerometer.addListener((accelerometerData) => {
      setData(accelerometerData);
    });
  };

  const _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  let { x, y, z } = data;
  if (theme === "dark") {
    return (
      <View style={styles.sensor}>
        <Text style={styles.textDarkHead}>Accelerometer {"\n"}</Text>
        <Text style={styles.textDark}>
          x: {round(x)} y: {round(y)} z: {round(z)}
        </Text>
        <Text style={styles.textDark}>(in Gs where 1 G = 9.81 m s^-2)</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={_toggle} style={styles.button}>
            <Text>Toggle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={_slow}
            style={[styles.button, styles.middleButton]}
          >
            <Text>Slow</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={_fast} style={styles.button}>
            <Text>Fast</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.sensor}>
        <Text style={styles.textLightHead}>Accelerometer {"\n"}</Text>
        <Text style={styles.textLight}>
          x: {round(x)} y: {round(y)} z: {round(z)}
        </Text>
        <Text style={styles.textLight}>(in Gs where 1 G = 9.81 m s^-2)</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={_toggle} style={styles.button}>
            <Text>Toggle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={_slow}
            style={[styles.button, styles.middleButton]}
          >
            <Text>Slow</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={_fast} style={styles.button}>
            <Text>Fast</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
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
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ccc",
  },
  sensor: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  textDark: {
    textAlign: "center",
    color: "white",
  },
  textLight: {
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
