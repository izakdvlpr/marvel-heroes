  
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import Details from "../pages/Details";
import List from "../pages/List";

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={Details} />
        <Screen name="List" component={List} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;