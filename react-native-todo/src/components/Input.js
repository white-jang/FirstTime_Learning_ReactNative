import React from 'react';
import styled from 'styled-components';
import { useWindowDimensions } from 'react-native';
import propTypes from 'prop-types';

const Input = ({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  onBlur,
}) => {
  // const width = Dimensions.get('window).width;
  const width = useWindowDimensions().width;
  return (
    <StyledInput
      width={width}
      placeholder={placeholder}
      maxLength={50}
      autoCapitalize="none" // 첫글자 자동 대문자 설정 해제
      autoCorrect={false} // 오타 입력 시 자동 수정 해제
      returnKeyType="done" // 완료 버튼을 'done'으로 설정
      keyboardAppearance="dark" // 키보드를 다크 모드로 설정 (iOS에서)
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      onBlur={onBlur}
    />
  );
};

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
  width: ${({ width }) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.itemBackground};
  font-size: 25px;
  color: ${({ theme }) => theme.text};
`;

Input.propTypes = {
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  onChangeText: propTypes.func.isRequired,
  onSubmitEditing: propTypes.func.isRequired,
  onBlur: propTypes.func.isRequired,
};

export default Input;
