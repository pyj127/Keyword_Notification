import SettingScreen from '../screens/Tab/Set/SettingScreen';
import Account from '../screens/Tab/Set/SetScreens/Account';
import Alarm from '../screens/Tab/Set/SetScreens/Alarm';
import AlarmCycle from '../screens/Tab/Set/SetScreens/AlarmCycle';
import Condition from '../screens/Tab/Set/SetScreens/Condition';
import Contact from '../screens/Tab/Set/SetScreens/Contact';
import Personal from '../screens/Tab/Set/SetScreens/Personal';

import id from '../screens/Tab/Set/SetScreens/Account/id';
import pw from '../screens/Tab/Set/SetScreens/Account/pw';
import logout from '../screens/Tab/Set/SetScreens/Account/logout';
import quit from '../screens/Tab/Set/SetScreens/Account/quit';

import { createSwitchNavigator, createAppContainer } from "react-navigation";

export default createAppContainer(
  createSwitchNavigator(
    {
      SettingScreen,
      Account,
      Alarm,
      AlarmCycle,
      Condition,
      Contact,
      Personal,
      id,
      pw,
      logout,
      quit,
    },
    {
      initialRouteName: "SettingScreen",
    }
  )
);

