import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import propTypes from 'prop-types';
import { images } from '../images';

const IconButton = ({ type, id, onPressOut, completed }) => {
  const _onPressOut = () => {
    onPressOut(id);
  };

  return (
    <Pressable onPressOut={_onPressOut} hitSlop={10}>
      <Icon source={type} completed={completed} />
    </Pressable>
  );
};

const Icon = styled.Image`
  tint-color: ${({ theme, completed }) =>
    completed ? theme.done : theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

IconButton.defaultProps = {
  onPressOut: () => {},
};

IconButton.propTypes = {
  type: propTypes.oneOf(Object.values(images)).isRequired,
  onPressOut: propTypes.func,
  id: propTypes.number,
  completed: propTypes.bool,
};

export default IconButton;
