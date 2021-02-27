import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { Input, Button1, Button2, Button3 } from "../../components";
import { Alert } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from "../../utils/common";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 40px 20px;
`;

const Blank = styled.Text`
  flex: 0.05;
`;

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: #ff0000;
`;

const SignupScreen = ({ navigation }) => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const didMountRef = useRef(); //useEffect 오류 메시지 처음 화면에서 나타나는 오류 해결, 마운트 되었을 때 useEffect에서 didMountRef에 값 대입하기

  useEffect(() => {
    if (didMountRef.current) {
      let _errorMessage = "";
      if (!id) {
        _errorMessage = "아이디를 입력해주세요.";
      } else if(!email){
        _errorMessage = "이메일을 입력해주세요.";
      }else if (!validateEmail(email)) {
        _errorMessage = "올바른 이메일 형식이 아닙니다.";
      } else if (password.length < 6) {
        _errorMessage = "비밀번호는 6글자 이상이어야 합니다.";
      } else if (password !== passwordConfirm) {
        _errorMessage = "비밀번호 확인이 맞나요?";
      } else {
        _errorMessage = "";
      }
      setErrorMessage(_errorMessage);
    } else {
      didMountRef.current = true;
    }
  }, [id, email, password, passwordConfirm]);

  useEffect(() => {
    setDisabled(!(id && email && password && passwordConfirm && !errorMessage));
  }, [id, email, password, passwordConfirm, errorMessage]);

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
          Alert.alert("정상적으로 회원가입 되었습니다.");
          navigation.navigate("LoginScreen");
        } else {
          Alert.alert("입력한 정보를 확인해주세요.");
        }
      });
  };

  return (
    <KeyboardAwareScrollView extraScrollHeight={10}>
      <Container>
        <Blank></Blank>
        <Input
          label="아이디"
          value={id}
          onChangeText={(text) => setId(text)}
          onSubmitEditing={() => {
            setId(id.trim());
            emailRef.current.focus();
          }}
          onBlur={() => setId(id.trim())}
          placeholder="아이디"
          returnKeyType="next"
        />
        <Input
          ref={emailRef}
          label="이메일"
          value={email}
          onChangeText={(text) => setEmail(removeWhitespace(text))}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="이메일"
          returnKeyType="next"
        />
        <Input
          ref={passwordRef}
          label="비밀번호"
          value={password}
          onChangeText={(text) => setPassword(removeWhitespace(text))}
          onSubmitEditing={() => passwordConfirmRef.current.focus()}
          placeholder="비밀번호"
          returnKeyType="done"
          isPassword
        />
        <Input
          ref={passwordConfirmRef}
          label="비밀번호 확인"
          value={passwordConfirm}
          onChangeText={(text) => setPasswordConfirm(removeWhitespace(text))}
          onSubmitEditing={_handleSignupButtonPress}
          placeholder="비밀번호"
          returnKeyType="done"
          isPassword
        />
        <ErrorText>{errorMessage}</ErrorText>
        <Button3
          title="회원가입"
          onPress={_handleSignupButtonPress}
          disabled={disabled}
        />
        <Button2
          title="로그인 화면으로 돌아가기"
          onPress={() => navigation.navigate("LoginScreen")}
          underlayColor={"transparent"}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default SignupScreen;
