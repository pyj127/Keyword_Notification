import React from "react";
import Loading from "./Loading";
import Switch from "./app/routers/Switch";
//import TabStackScreen from "./app/routers/TabStackScreen";
//import SettingSwitch from "./app/routers/SettingSwitch";

export default class extends React.Component {
  state = {
    isLoading: true,
    //id:null, pw:null 이런식으로 해보기
  };
  componentDidMount = async () => {
    setTimeout(() => {
      this.setState({ isLoading: false }); //Loading으로 넘어가서 작업하려면 true로 바꾸면 됨
    }, 2500); //2.5초후에 Login화면으로 전환됨
  };

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    } else {
     return <Switch />;
    // return <SettingSwitch />; //현재 네비게이션 문제가 있어, 위의 return <Switch />;를 주석처리하고 return <SettingSwitch />;의 주석을 빼면 setting 화면에서 네비게이션이 동작함을 확인할 수 있습니다. 현재 상황이 그렇고, 곧 고칠 것입니다!
    }
  }
}
