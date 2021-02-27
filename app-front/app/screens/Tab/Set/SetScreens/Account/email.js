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

const email = ({ navigation }) => {
  return (
    <Container>
      <StyledText>이메일 변경</StyledText>
      <Button
        title="go to the Account screen"
        onPress={() => navigation.navigate('Account')}
      />
    </Container>
  );
};

export default email;