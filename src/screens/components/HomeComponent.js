import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, ActivityIndicator } from 'react-native';
import Input from '../../assets/components/Input';

const HomeComponent = ({ name, onChangeName, onPressButton, text, isLoading }) => (
  <View>
    <Input value={name} onChange={onChangeName} />
    <Button onPress={onPressButton} title="CLick me" />
    <Text>{text}</Text>
    {isLoading && <ActivityIndicator />}
  </View>
);

HomeComponent.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onPressButton: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default HomeComponent;
