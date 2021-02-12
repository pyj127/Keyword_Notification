import React from "react";
import Loading from "./Loading";
import SwitchScreen from "./src/routers/SwitchScreen";
import Signup from "./Signup";

export default class extends React.Component {
  state = {
    isLoading: true,
    //id:null, pw:null 이런식으로 해보기
  };
  componentDidMount = async () => {
    setTimeout(() => {
      this.setState({ isLoading: false }); 
    }, 3000); //3초후에 Login화면으로 전환됨
  };

  render() {
    return <Signup />;
  }
}

/*
  render() {
    if (this.state.isLoading) {
      return <Loading />;
    } else {
      return <SwitchScreen />;
    }
  }
*/