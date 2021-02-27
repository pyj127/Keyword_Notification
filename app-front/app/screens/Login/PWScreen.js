import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { Input, Button1, Button2, Button3 } from "../../components";
import { Alert } from "react-native";
import { validateEmail, removeWhitespace } from "../../utils/common";
import IDScreen from "./IDScreen";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 0 20px;
`;

const Blank = styled.Text`
  flex: 0.07;
`;

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: #ff0000;
`;

const PWScreen = ({ navigation }) => {
  const [id, setId] = useState("");

  const _handleSignupButtonPress = ({ navigation }) => {
    fetch("http://13.125.132.137:3000/register", {
      method: "POST",
      headers: {
        "CONTENT-TYPE": "application/json",
      },
      body: JSON.stringify({
        id: id,
        email: email,
        psword: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success === true) {
          Alert.alert("휴대폰 인증을 진행합니다."); //PASS 앱
        } else {
          Alert.alert("가입된 정보가 없습니다. 아이디 찾기로 이동합니다.");
          navigation.navigate("SignupScreen");
        }
      });
  };

  return (
      <Container>
        <Input
          value={id}
          onChangeText={(text) => setId(text)}
          onSubmitEditing={() => {
            setId(id.trim());
          }}
          onBlur={() => setId(id.trim())}
          placeholder="가입된 아이디"
        />
        <Blank></Blank>
        <Button3
          title="비밀번호 찾기"
          onPress={_handleSignupButtonPress}
        />
        <Button2
          title="로그인 화면으로 돌아가기"
          onPress={() => navigation.navigate("LoginScreen")}
          underlayColor={"transparent"}
        />
      </Container>
  );
};

export default PWScreen;

/*
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";

const PWScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 40, textAlign: "center" }}>여기는 PW</Text>
        <View style={{ marginTop: 10, borderRadius: 8 }}>
          <TouchableHighlight
            onPress={() => navigation.navigate("LoginScreen")}
            underlayColor={"transparent"}
          >
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>log in</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default PWScreen;

const styles = StyleSheet.create({
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
});
*/