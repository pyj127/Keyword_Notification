import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  background-color: #ffffff;
  align-items: center;
`;
const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const AlarmCycle = ({ navigation }) => {
  return (
    <Container>
      <StyledText>알림 주기 설정</StyledText>
      <Button
        title="go to the setting screen"
        onPress={() => navigation.navigate('SettingScreen')}
      />
    </Container>
  );
};

export default AlarmCycle;
