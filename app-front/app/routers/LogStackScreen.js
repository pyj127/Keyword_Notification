//id찾기, pw찾기, sign 화면 경로 정함
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Login/LoginScreen";
import IDScreen from "../screens/Login/IDScreen";
import PWScreen from "../screens/Login/PWScreen";
import SignScreen from "../screens/Login/SignScreen";
import TabStackScreen from "./TabStackScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Component } from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

const LogStack = createStackNavigator(); //여기서 home없애기

export default function LogStackScreen() {
  //export 까먹지 말기
  return (
    <NavigationContainer>
      <LogStack.Navigator initialRouteName="LoginScreen">
        <LogStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <LogStack.Screen
          name="IDScreen"
          component={IDScreen}
          options={{ headerShown: false }}
        />
        <LogStack.Screen
          name="PWScreen"
          component={PWScreen}
          options={{ headerShown: false }}
        />
        <LogStack.Screen
          name="SignScreen"
          component={SignScreen}
          options={{ headerShown: false }}
        />
      </LogStack.Navigator>
    </NavigationContainer>
  );
}
