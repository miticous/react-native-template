import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeContainer from '../screens/containers/HomeContainer';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeContainer} />
  </Stack.Navigator>
);

export default Routes;
