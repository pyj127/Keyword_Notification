import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { Input, Button1 } from "../../../../../components";
import { Alert } from "react-native";
import { removeWhitespace } from "../../../../../utils/common";

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

const SignupScreen = () => {
  const [newpassword, setnewPassword] = useState("");
  const [newpasswordConfirm, setnewPasswordConfirm] = useState("");
  const [oldpassword, setoldPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  const newpasswordRef = useRef();
  const newpasswordConfirmRef = useRef();
  const oldpasswordRef = useRef();

  const didMountRef = useRef(); //useEffect 오류 메시지 처음 화면에서 나타나는 오류 해결, 마운트 되었을 때 useEffect에서 didMountRef에 값 대입하기

  useEffect(() => {
    if (didMountRef.current) {
      let _errorMessage = "";

      if (!oldpassword) {
        _errorMessage = "현재 비밀번호를 입력해주세요.";
      } else if (newpassword.length < 6) {
        _errorMessage = "비밀번호는 6글자 이상이어야 합니다.";
      } else if (newpassword !== newpasswordConfirm) {
        _errorMessage = "비밀번호가 동일하지 않습니다.";
      } else {
        _errorMessage = "";
      }
      setErrorMessage(_errorMessage);
    } else {
      didMountRef.current = true;
    }
  }, [oldpassword, newpassword, newpasswordConfirm]);

  useEffect(() => {
    setDisabled(
      !(oldpassword && newpassword && newpasswordConfirm && !errorMessage)
    );
  }, [oldpassword, newpassword, newpasswordConfirm, errorMessage]);

  const _handlePWChangeButtonPress = () => {
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
          "비밀번호를 변경하면 모든 디바이스에서 즉시 로그아웃 처리됩니다. 변경하시겠습니까?"
        );
        if (data.success === true) {
          Alert.alert("비밀번호가 정상적으로 변경되었습니다.");
        } else {
          Alert.alert("현재 비밀번호가 올바르지 않습니다.");
        }
      });
  };

  return (
    <Container>
      <Blank></Blank>
      <Input
        ref={oldpasswordRef}
        label="현재 비밀번호"
        value={oldpassword}
        onChangeText={(text) => setoldPassword(removeWhitespace(text))}
        onSubmitEditing={() => newpasswordRef.current.focus()}
        placeholder="현재 비밀번호"
        returnKeyType="done"
        isPassword
      />
      <Input
        ref={newpasswordRef}
        label="새 비밀번호"
        value={newpassword}
        onChangeText={(text) => setnewPassword(removeWhitespace(text))}
        onSubmitEditing={() => newpasswordConfirmRef.current.focus()}
        placeholder="새 비밀번호"
        returnKeyType="done"
        isPassword
      />
      <Input
        ref={newpasswordConfirmRef}
        label="새 비밀번호 확인"
        value={newpasswordConfirm}
        onChangeText={(text) => setnewPasswordConfirm(removeWhitespace(text))}
        onSubmitEditing={_handlePWChangeButtonPress}
        placeholder="새 비밀번호 확인"
        returnKeyType="done"
        isPassword
      />
      <ErrorText>{errorMessage}</ErrorText>
      <Button1
        title="비밀번호 변경"
        onPress={_handlePWChangeButtonPress}
        disabled={disabled}
      />
    </Container>
  );
};

export default SignupScreen;
