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

const Condition = () => {
  return (
    <Container>
      <Text>서비스 이용약관</Text>
    </Container>
  );
};

export default Condition;
