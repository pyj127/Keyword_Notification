import React from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import {Button1} from '../../../../../components';

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

const Quit = ({navigation}) => {
  const _handleLogoutButtonPress = async () => {
    try {
      await quit();
      navigation.navigate('LoginScreen');
    } catch (e) {
      console.log('[Profile] logout: ', e.message);
    } finally {
      dispatch({});
    }
  };

  return (
    <Container>
      <Text>정말로 탈퇴 하시겠습니까?</Text>
      <Button1
        title="탈퇴하기"
        onPress={_handleLogoutButtonPress}
        containerStyle={{marginTop: 30}}
      />
    </Container>
  );
};

export default Quit;
