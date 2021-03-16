import React from "react";
import styled from "styled-components/native";

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

const AlarmCycle = () => {
  return (
    <Container>
      <Text>알림 주기 설정</Text>
    </Container>
  );
};

export default AlarmCycle;
