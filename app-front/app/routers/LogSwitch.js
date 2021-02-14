import LoginScreen from "../screens/Login/LoginScreen";
import IDScreen from "../screens/Login/IDScreen";
import PWScreen from "../screens/Login/PWScreen";
import SignScreen from "../screens/Login/SignScreen";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

export default createAppContainer(
  createSwitchNavigator(
    {
      LoginScreen,
      IDScreen,
      PWScreen,
      SignScreen,
    },
    {
      initialRouteName: "LoginScreen",
    }
  )
);
