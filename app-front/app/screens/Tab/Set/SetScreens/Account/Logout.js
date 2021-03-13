import React from 'react';
import styled from 'styled-components/native';
import {Button1} from '../../../../../components';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LoginScreen from '../../../../Login/LoginScreen';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;
const Text = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: black;
  align-self: center;
  margin: 20px;
`;

const Logout = ({navigation}) => {
  async function _handleLogoutButtonPress() {
    const response = await fetch('http://13.125.132.137:3000/logout', {
      method: 'GET',
    });
    const data = await response.json();
    if (data.success === true) {
      Alert.alert('로그아웃 성공');
      this.props.navigation.navigate('SignupScreen');
    } else {
      //console.log("로그인 실패");
      Alert.alert('로그아웃 실패');
    }
  }

  return (
    <Container>
      <Text>정말 로그아웃 하시겠습니까?</Text>
      <Button1
        title="로그아웃하기"
        onPress={_handleLogoutButtonPress}
        containerStyle={{marginTop: 30}}
      />
    </Container>
  );
};

export default Logout;
