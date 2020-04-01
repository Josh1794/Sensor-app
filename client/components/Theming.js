import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Layout } from "react-native-ui-kitten";

const TabTwo = props => {
  return (
    <Layout style={styles.container}>
      <Text>Try Dark Mode</Text>
      <Text></Text>
      <Button onPress={props.toggleTheme}>Toggle Dark Mode</Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default TabTwo;
