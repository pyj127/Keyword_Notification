import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
//import { Entypo } from "@expo/vector-icons";

import ListScreen from "../screens/Tab/ListScreen";
import AddScreen from "../screens/Tab/Add/AddScreen";
import DetailsScreen from "../screens/Tab/DetailsScreen";
import SettingStack from "./SettingStack";

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
            alignSelf: "center",
          },
        }}
      />
      <ListStack.Screen
        name="장학생"
        component={DetailsScreen}
        options={{
          headerTitleStyle: {
            fontSize: 20,
            //alignSelf: "center",
          },
        }}
      />
    </ListStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function TabStackScreen() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          initialRouteName="List"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName;
              if (route.name === "List") {
                iconName = "list";
              } else if (route.name === "Add") {
                iconName = "circle-with-plus";
              } else {
                iconName = "cog";
              }
              //return <Entypo name="bell" size={30} color={color} />;
              return <Icon name={iconName} size={30} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "dodgerblue",
            inactiveTintColor: "gray",
            style: {
              height: 55,
              paddingTop: 6,
              paddingBottom: 3,
            },
          }}
        >
          <Tab.Screen name="List" component={ListStackScreen} />
          <Tab.Screen name="Add" component={AddScreen} />
          <Tab.Screen name="Settings" children={()=><SettingStack/>}/>
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}