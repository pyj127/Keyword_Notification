import * as React from "react";
import { Component } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
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
      this.props.navigation.navigate("TabStackScreen");
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
            borderRadius="8"
            borderColor="dodgerblue"
          />
        </View>
        <View style={styles.pw}>
          <TextInput //여기서 키보드로 입력받은 데이터값 (textinput)을 setstate로 pw값에 넣어줬음
            onChangeText={(pw) => this.setState({ pw })}
            style={styles.idPw}
            placeholder="비밀번호"
            placeholderTextColor="black"
            secureTextEntry
            borderRadius="8"
            borderColor="dodgerblue"
          />
        </View>
        <View style={{ marginTop: 10, borderRadius: 8 }}>
          <TouchableHighlight onPress={() => this.buttonClick()}>
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>log in</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.etcTitle}>
          <Text
            style={styles.etc}
            onPress={() => this.props.navigation.navigate("IDScreen")}
          >
            아이디찾기{" "}
          </Text>
          <Text
            style={styles.etc}
            onPress={() => this.props.navigation.navigate("PWScreen")}
          >
            {" "}
            | {"  "}비밀번호찾기{"  "}
          </Text>
          <Text
            style={styles.etc}
            onPress={() => this.props.navigation.navigate("SignScreen")}
          >
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
    backgroundColor: "dodgerblue",
    padding: 8,
  },
  title: {
    fontSize: 55,
    fontWeight: "900", //android에도 적용할려면 bold로 바꿔야 함
    textAlign: "center",
    color: "gold",
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
    borderRadius: 8,
  },
  pw: {
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 8,
  },
  idPw: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 15,
  },
  button: {
    backgroundColor: "gold",
    padding: 10,
    borderRadius: 8,
  },
  buttonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "midnightblue",
    textAlign: "center",
  },
  etcTitle: {
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: "center",
  },
  etc: {
    color: "midnightblue", //navy or midnightblue
    fontSize: 15,
  },
});
