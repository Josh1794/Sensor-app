import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import {
  TabOne,
  TabThree,
  TabFour,
  TabFive,
  Home,
  About,
} from "./client/components";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  AppearanceProvider,
  useColorScheme,
  Appearance,
} from "react-native-appearance";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

export default App = () => {
  const Drawer = createDrawerNavigator();
  const scheme = useColorScheme();

  let statusColor = "";
  if (scheme === "dark") {
    statusColor = "light-content";
  } else {
    statusColor = "dark-content";
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={`${statusColor}`} />
      <AppearanceProvider>
        <NavigationContainer
          theme={scheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Gyroscope" component={TabOne} />
            <Drawer.Screen
              name="Pedometer"
              component={TabThree}
              initialParams={{ theme: useColorScheme() }}
            />
            <Drawer.Screen name="Accelerometer" component={TabFour} />
            <Drawer.Screen name="Barometer" component={TabFive} />
            <Drawer.Screen name="About" component={About} />
          </Drawer.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
    </SafeAreaView>
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
