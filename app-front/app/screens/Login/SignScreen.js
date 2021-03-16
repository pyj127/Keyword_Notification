import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
} from "react-native";

const InputBox = () => {
  return (
    <View style={{ alignItems: "center", marginBottom: 25 }}>
      <TextInput //여기서 키보드로 입력받은 데이터값 (textinput)으로 state설정하기
        //onChangeText={(id) => this.setState({ id })}
        style={styles.text_in}
      />
    </View>
  );
};
const InputBox_pw = () => {
  return (
    <View style={{ alignItems: "center", marginBottom: 25 }}>
      <TextInput //여기서 키보드로 입력받은 데이터값 (textinput)으로 state설정하기
        //onChangeText={(pw) => this.setState({ pw })}
        style={styles.text_in}
        secureTextEntry
      />
    </View>
  );
};

const SignScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
      }}
    >
      <View style={{}}>
        <View style={{ marginBottom: 40 }}>
          <Text style={styles.main_title}>Keyword</Text>
          <Text style={styles.main_title}>Alarm</Text>
        </View>
        <Text style={styles.title}>아이디</Text>
        <InputBox />

        <Text style={styles.title}>비밀번호</Text>
        <InputBox_pw />

        <Text style={styles.title}>비밀번호 재확인</Text>
        <InputBox_pw />

        <Text style={styles.title}>이메일</Text>
        <InputBox />
      </View>
      <View
        style={{
          marginTop: 30,
          borderRadius: 8,
          alignItems: "center",
        }}
      >
        <TouchableHighlight
          onPress={() => {
            Alert.alert("회원가입 완료");
            navigation.navigate("LoginScreen");
          }}
          underlayColor={"transparent"}
        >
          <View style={styles.button}>
            <Text style={styles.buttonTitle}>가입하기</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};
export default SignScreen;

const styles = StyleSheet.create({
  main_title: {
    fontSize: 55,
    fontWeight: "900", //android에도 적용할려면 bold로 바꿔야 함
    textAlign: "center",
    color: "dodgerblue",
    marginRight: 10,
  },
  text_in: {
    height: 50,
    width: 350,
    borderWidth: 1,
    borderColor: "gainsboro",
    fontSize: 17,
    borderRadius: 7,
    paddingLeft: 10,
    backgroundColor: "gainsboro",
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 13,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "dodgerblue",
    padding: 10,
    borderRadius: 8,
    height: 50,
    width: 300,
    justifyContent: "center",
  },
  buttonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
