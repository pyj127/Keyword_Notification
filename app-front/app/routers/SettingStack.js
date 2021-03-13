import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native';

import SettingScreen from '../screens/Tab/Set/SettingScreen';
import Account from '../screens/Tab/Set/SetScreens/Account';
import Alarm from '../screens/Tab/Set/SetScreens/Alarm';
import AlarmCycle from '../screens/Tab/Set/SetScreens/AlarmCycle';
import Condition from '../screens/Tab/Set/SetScreens/Condition';
import Contact from '../screens/Tab/Set/SetScreens/Contact';
import Personal from '../screens/Tab/Set/SetScreens/Personal';

import EmailChange from '../screens/Tab/Set/SetScreens/Account/EmailChange';
import PWChange from '../screens/Tab/Set/SetScreens/Account/PWChange';
import Logout from '../screens/Tab/Set/SetScreens/Account/Logout';
import Quit from '../screens/Tab/Set/SetScreens/Account/Quit';

const Stack = createStackNavigator();

const SettingStack = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: 'dodgerblue',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
          },
          cardStyle: {backgroundColor: 'white'},
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen name="설정" component={SettingScreen} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Alarm" component={Alarm} />
        <Stack.Screen name="AlarmCycle" component={AlarmCycle} />
        <Stack.Screen name="Condition" component={Condition} />
        <Stack.Screen name="Personal" component={Personal} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="EmailChange" component={EmailChange} />
        <Stack.Screen name="PWChange" component={PWChange} />
        <Stack.Screen name="Logout" component={Logout} />
        <Stack.Screen name="Quit" component={Quit} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default SettingStack;
