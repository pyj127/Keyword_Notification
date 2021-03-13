import React from 'react';
import {ToastAndroid, BackHandler} from 'react-native';
import Switch from './app/routers/Switch';
import TabStackScreen from './app/routers/TabStackScreen';
import Loading from './Loading';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  // 이벤트 등록
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  // 이벤트 등록
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  componentDidMount = async () => {
    setTimeout(() => {
      this.setState({isLoading: false}); //Loading으로 넘어가서 작업하려면 true로 바꾸면 됨
    }, 2500); //2.5초후에 Login화면으로 전환됨
  };

  // 이벤트 해제
  componentWillUnmount() {
    this.exitApp = false;
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  // 이벤트 동작
  handleBackButton = () => {
    // 2000(2초) 안에 back 버튼을 한번 더 클릭 할 경우 앱 종료
    if (this.exitApp == undefined || !this.exitApp) {
      ToastAndroid.show('한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT);
      this.exitApp = true;

      this.timeout = setTimeout(
        () => {
          this.exitApp = false;
        },
        2000, // 2초
      );
    } else {
      clearTimeout(this.timeout);

      BackHandler.exitApp(); // 앱 종료
    }
    return true;
  };

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    } else {
      return <TabStackScreen />;
      //<Switch />;
    }
  }
}
/*
import { useState } from 'react';
import AppLoading from 'expo';
const App = () => {
  const [isReady, setIsReady] = useState(false);
  return !isReady ? (
    <Switch />
  ) : (
    <AppLoading
      onFinish={() => setIsReady(true)}
      onError={console.error}
    />
  );
}
export default App;
*/

/*
import Loading from "./Loading";
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
    //return <Tab />;
    }
  }
}
*/
