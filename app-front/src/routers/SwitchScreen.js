
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import ListScreen from "src/screens/ListScreen";
import AddScreen from "src/screens/AddScreen";
import LoginScreen from "src/screens/LoginScreen";
import SettingScreen from "src/screens/SettingScreen";
import DetailsScreen from "src/screens/DetailsScreen";
import Icon from "react-native-vector-icons/Entypo";

const ListStack = createStackNavigator(); //여기서 home없애기

function ListStackScreen() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="키워드 목록"
        component={ListScreen}
        options={{
          headerTransParent: false,
          headerTintColor: "dodgerblue",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />
      <ListStack.Screen name="장학생,등록금" component={DetailsScreen} />
    </ListStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabStackScreen() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          initialRouteName="List"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === "List") {
                iconName = "list";
              } else if (route.name === "Add") {
                iconName = "circle-with-plus";
              } else {
                iconName = "cog";
              }
              return <Icon name={iconName} size={30} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "dodgerblue",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="List" component={ListStackScreen} />
          <Tab.Screen name="Add" component={AddScreen} />
          <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginScreen,
      Tab: TabStackScreen,
    },
    {
      initialRouteName: "Login",
    }
  )
);