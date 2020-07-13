import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

const Input = ({ value, onChange }) => (
  <TextInput value={value} onChangeText={text => onChange(text)} />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
