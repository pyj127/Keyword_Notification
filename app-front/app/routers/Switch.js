import { createSwitchNavigator, createAppContainer } from "react-navigation";
import TabStackScreen from "./TabStackScreen";
import LogSwitch from "./LogSwitch";
import SettingSwitch from './SettingSwitch';

export default createAppContainer(
  createSwitchNavigator(
    {
      LogSwitch,
      TabStackScreen,
      SettingSwitch,
    },
    {
      initialRouteName: "LogSwitch",
    }
  )
);