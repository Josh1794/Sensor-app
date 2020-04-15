import React from "react";
import { StatusBar } from "react-native";
import {
  TabOne,
  TabThree,
  TabFour,
  TabFive,
  Home,
  About,
} from "./client/components";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { enableScreens } from "react-native-screens";

enableScreens();

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
    <AppearanceProvider>
      <StatusBar barStyle={`${statusColor}`} />
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
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
  );
};
