import React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import { Button1 } from '../../../../../components';
import { Button2 } from '../../../../../components';

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
  color: dodgerblue;
  align-self: center;
  margin: 20px;
`;

const logout = ({ navigation }) => {

  const _handleLogoutButtonPress = async () => {
    try {
      await logout();
    } catch (e) {
      console.log('[Profile] logout: ', e.message);
    } finally {
      dispatch({});
    }
  };

  return (
    <Container>
      <Text>정말 로그아웃 하시겠습니까?</Text>
      <Button1
        title="LOGOUT"
        onPress={_handleLogoutButtonPress}
        containerStyle={{ marginTop: 30}}
      />
      <Button2
        title="계정 관리 화면으로 돌아가기"
        onPress={() => navigation.navigate('Account')}
      />
    </Container>
  );
};

export default logout;
