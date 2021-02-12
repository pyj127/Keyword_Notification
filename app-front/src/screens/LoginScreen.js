import * as React from "react";
import { Component } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Actions } from "react-native-router-flux";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
  SafeAreaView,
} from "react-native";
export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      pw: null,
    };
  }
  buttonClick() {
    if (this.state.id === null || this.state.pw === null) {
      Alert.alert("아이디 또는 비밀번호를 \n확인해주세요.");
    } else {
      // DB에 존재하는 회원데이터와 일치할 시 로그인 성공
      //Alert.alert("로그인 성공");
      this.props.navigation.navigate("Tab");
      //Actions.Tab();
      //<TabStackScreen />;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Keyword</Text>

        <View style={styles.iconContainer}>
          <Text style={styles.title}>Alarm</Text>
          <Icon name="bell-ring" size={50} color="gold" />
        </View>

        <View style={styles.id}>
          <TextInput //여기서 키보드로 입력받은 데이터값 (textinput)을 setstate로 id값에 넣어줬음
            onChangeText={(id) => this.setState({ id })}
            style={styles.idPw}
            placeholder="아이디"
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.pw}>
          <TextInput //여기서 키보드로 입력받은 데이터값 (textinput)을 setstate로 pw값에 넣어줬음
            onChangeText={(pw) => this.setState({ pw })}
            style={styles.idPw}
            placeholder="비밀번호"
            placeholderTextColor="black"
            secureTextEntry
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <TouchableHighlight onPress={() => this.buttonClick()}>
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>log in</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.etcTitle}>
          <Text style={styles.etc} onPress={() => Alert.alert("아이디찾기")}>
            아이디찾기{" "}
          </Text>
          <Text style={styles.etc} onPress={() => Alert.alert("비밀번호찾기")}>
            {" "}
            | {"  "}비밀번호찾기{"  "}
          </Text>
          <Text style={styles.etc} onPress={() => Alert.alert("회원가입")}>
            | {"  "}회원가입
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    padding: 8,
  },
  title: {
    fontSize: 55,
    fontWeight: "bold",
    textAlign: "center",
    color: "dodgerblue",
    marginRight: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 90,
  },
  id: {
    backgroundColor: "white",
    marginTop: 20,
  },
  pw: {
    backgroundColor: "white",
    marginTop: 10,
  },
  idPw: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 15,
  },
  button: {
    backgroundColor: "dodgerblue",
    padding: 10,
  },
  buttonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  etcTitle: {
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: "center",
  },
  etc: {
    color: "black",
    fontSize: 15,
  },
});
