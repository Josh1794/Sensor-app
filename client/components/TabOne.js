import React from "react";
import { StyleSheet } from "react-native";
import { Text, Layout } from "react-native-ui-kitten";

const TabOne = props => {
  return (
    <Layout style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "orange",
    alignSelf: "center",
    marginTop: 20
  }
});

export default TabOne;
