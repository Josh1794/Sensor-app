import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { TabOne, TabThree, TabFour, TabFive, Home } from "./client/components";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { mapping, light, dark } from "@eva-design/eva";
import { Appearance } from "react-native-appearance";
import { NavigationContainer } from "@react-navigation/native";

const themes = { light, dark };
const Drawer = createDrawerNavigator();

export default App = () => {
  const [theme] = React.useState(Appearance.getColorScheme());

  let statusColor = "";
  if (theme === "light") {
    statusColor = "dark-content";
  } else {
    statusColor = "light-content";
  }

  return (
    <ApplicationProvider mapping={mapping} theme={themes[theme]}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={`${statusColor}`} />
        {/* <Layout style={styles.container}> */}
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Gyroscope" component={TabOne} />
            <Drawer.Screen name="Pedometer" component={TabThree} />
            <Drawer.Screen name="Accelerometer" component={TabFour} />
            <Drawer.Screen name="Barometer" component={TabFive} />
          </Drawer.Navigator>
        </NavigationContainer>
        {/* </Layout> */}
      </SafeAreaView>
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
  },
  tabs: {
    flex: 1,
    marginTop: 50,
  },
});
