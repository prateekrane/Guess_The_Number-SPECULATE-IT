import * as React from "react";
import { View, Text, ImageBackground } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import Introduction from "../screens/introduction";
import DetailScreen from "../screens/Detail";

import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import ScreenMovement from "./ScreenMovement";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="1"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="1" component={WelcomeScreen} />
        <Stack.Screen name="2" component={Introduction} />
        <Stack.Screen name="3" component={DetailScreen} />
        <Stack.Screen name="4" component={ScreenMovement} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
