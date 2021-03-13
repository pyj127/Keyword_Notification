import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { Input, Button1 } from "../../../../../components";
import { Alert } from "react-native";
import { validateEmail, removeWhitespace } from "../../../../../utils/common";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 40px 20px;
`;

const Blank = styled.Text`
  flex: 0.15;
`;

const Explanation = styled.Text`
  flex: 0.25;
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

const EmailChange = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();

  const didMountRef = useRef(); //useEffect 오류 메시지 처음 화면에서 나타나는 오류 해결, 마운트 되었을 때 useEffect에서 didMountRef에 값 대입하기

  useEffect(() => {
    if (didMountRef.current) {
      let _errorMessage = "";
      if (!email) {
        _errorMessage = "이메일을 입력해주세요.";
      } else if (!validateEmail(email)) {
        _errorMessage = "올바른 이메일 형식이 아닙니다.";
      } else if (!password) {
        _errorMessage = "계정 비밀번호를 입력해주세요.";
      } else {
        _errorMessage = "";
      }
      setErrorMessage(_errorMessage);
    } else {
      didMountRef.current = true;
    }
  }, [email, password]);

  useEffect(() => {
    setDisabled(!(email && password && !errorMessage));
  }, [email, password, errorMessage]);

  const _handleEmailChangeButtonPress = () => {
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
        Alert.alert(
          "계정 분실, 개인정보 관련 고지 등에 사용되므로, 반드시 본인의 이메일을 입력해주세요. 변경하시겠습니까?"
        );
        if (data.success === true) {
          Alert.alert("정상적으로 이메일이 변경되었습니다.");
        } else {
          Alert.alert("계정 비밀번호가 올바르지 않습니다.");
        }
      });
  };

  return (
    <Container>
      <Blank></Blank>
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
        label="계정 비밀번호"
        value={password}
        onChangeText={(text) => setPassword(removeWhitespace(text))}
        onSubmitEditing={() => passwordConfirmRef.current.focus()}
        placeholder="계정 비밀번호"
        returnKeyType="done"
        isPassword
      />
      <ErrorText>{errorMessage}</ErrorText>
      <Button1
        title="이메일 변경"
        onPress={_handleEmailChangeButtonPress}
        disabled={disabled}
      />
      <Blank></Blank>
      <Explanation>※반드시 본인의 이메일을 입력해주세요.</Explanation>
      <Explanation>
        ※계정 분실 시 아이디/비밀번호 찾기, 개인정보 관련 주요 고지사항 안내
        등에 사용됩니다.
      </Explanation>
    </Container>
  );
};

export default EmailChange;
