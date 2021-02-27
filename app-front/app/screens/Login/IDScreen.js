import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { Input, Button1, Button2, Button3 } from "../../components";
import { Alert } from "react-native";
import { validateEmail, removeWhitespace } from "../../utils/common";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 0 20px;
`;

const Blank = styled.Text`
  flex: 0.05;
`;

const Explanation = styled.Text`
  flex: 0.1;
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: #808080;
`;

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: #ff0000;
`;

const IDScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  const emailRef = useRef();

  const didMountRef = useRef(); //useEffect 오류 메시지 처음 화면에서 나타나는 오류 해결, 마운트 되었을 때 useEffect에서 didMountRef에 값 대입하기

  useEffect(() => {
    if (didMountRef.current) {
      let _errorMessage = "";
      if (!validateEmail(email)) {
        _errorMessage = "올바른 이메일 형식이 아닙니다.";
      } else {
        _errorMessage = "";
      }
      setErrorMessage(_errorMessage);
    } else {
      didMountRef.current = true;
    }
  }, [email]);

  useEffect(() => {
    setDisabled(!(email && !errorMessage));
  }, [email, errorMessage]);

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
          Alert.alert("이메일에서 아이디를 확인해주세요.");
          navigation.navigate("LoginScreen");
        } else {
          Alert.alert("가입된 정보가 없습니다.");
        }
      });
  };

  return (
    <Container>
      <Input
        ref={emailRef}
        value={email}
        onChangeText={(text) => setEmail(removeWhitespace(text))}
        onSubmitEditing={() => passwordRef.current.focus()}
        placeholder="가입된 이메일"
      />
      <ErrorText>{errorMessage}</ErrorText>
      <Button3
        title="아이디 찾기"
        onPress={_handleSignupButtonPress}
        disabled={disabled}
      />
      <Button2
        title="로그인 화면으로 돌아가기"
        onPress={() => navigation.navigate("LoginScreen")}
        underlayColor={"transparent"}
      />
      <Blank></Blank>
      <Explanation>※가입된 아이디가 있을 경우, 입력하신 이메일로 아이디를 안내해 드립니다.</Explanation>
      <Explanation>※만약 이메일이 오지 않는다면, 스팸 편지함으로 이동하지 않았는지 확인해주세요.</Explanation>
      <Explanation>※이메일 서비스 제공자 사정에 의해 즉시 도착하지 않을 수 있으니, 최대 30분 정도 기다리신 후 다시 시도해주세요.</Explanation>
    </Container>
  );
};

export default IDScreen;

/*
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";

const IDScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 40, textAlign: "center" }}>여기는 ID</Text>
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
export default IDScreen;

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