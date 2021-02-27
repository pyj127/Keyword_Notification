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

const pw = ({ navigation }) => {
  return (
    <Container>
      <StyledText>비밀번호 변경</StyledText>
      <Button
        title="go to the Account screen"
        onPress={() => navigation.navigate('Account')}
      />
    </Container>
  );
};

export default pw;