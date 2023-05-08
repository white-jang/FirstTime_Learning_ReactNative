import React from 'react';
import styled from 'styled-components/native';

const Button = ({ title, theme }) => {
  return (
    <ButtonContainer title={title}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ title, theme }) =>
    title === 'Hanbit' ? theme.blue : theme.purple};
  border-radius: 15px;
  padding: 15px 40px;
  margin: 10px 0px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

export default Button;
