import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../screens/Login/LoginScreen";
import LogStackScreen from "./LogStackScreen";
import TabStackScreen from "./TabStackScreen";

export default createAppContainer(
  createSwitchNavigator(
    {
      LogStackScreen: LogStackScreen,
      TabStackScreen: TabStackScreen,
    },
    {
      initialRouteName: "LogStackScreen",
    }
  )
);
