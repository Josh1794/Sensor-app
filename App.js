import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { TabOne, TabThree, TabFour } from "./client/components";
import {
  ApplicationProvider,
  Layout,
  Tab,
  TabView
} from "react-native-ui-kitten";
import { mapping, light, dark } from "@eva-design/eva";
import { Appearance } from "react-native-appearance";

const themes = { light, dark };

export default App = () => {
  const [theme] = React.useState(Appearance.getColorScheme());

  let statusColor = "";
  if (theme === "light") {
    statusColor = "dark-content";
  } else {
    statusColor = "light-content";
  }

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <ApplicationProvider mapping={mapping} theme={themes[theme]}>
      <StatusBar barStyle={`${statusColor}`} />
      <Layout style={styles.container}>
        <TabView
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
          style={styles.tabs}
        >
          <Tab title="Gyroscope">
            <Layout style={styles.tabContainer}>
              <TabOne theme={theme} />
            </Layout>
          </Tab>
          <Tab title="Pedometer">
            <Layout style={styles.tabContainer}>
              <TabThree theme={theme} />
            </Layout>
          </Tab>
          <Tab title="Accelerometer">
            <Layout style={styles.tabContainer}>
              <TabFour theme={theme} />
            </Layout>
          </Tab>
        </TabView>
      </Layout>
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200
  },
  tabs: {
    flex: 1,
    marginTop: 50
  }
});
