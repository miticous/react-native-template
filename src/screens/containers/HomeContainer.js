/* eslint-disable no-undef */
import React, { useState } from 'react';
import reactotron from 'reactotron-react-native';
import { useTranslation } from 'react-i18next';
import HomeComponent from '../components/HomeComponent';
import { useStateValue } from '../../state';
import { Creators as ExampleActions } from '../../ducks/example';

const onPressButton = async ({ t, state, dispatch }) => {
  if (state?.length > 4) {
    await ExampleActions.getExample({ dispatch });
    return true;
  }

  return alert(`${t('app:text_too_short')}`);
};

const HomeContainer = props => {
  const [state, setState] = useState('Joao');
  const [
    {
      Example: { isLoading, example }
    },
    dispatch
  ] = useStateValue();
  const { t } = useTranslation();

  reactotron.log(example, isLoading);
  reactotron.log(props);

  return (
    <HomeComponent
      name={state}
      onChangeName={text => setState(text)}
      onPressButton={() => onPressButton({ state, dispatch, t })}
      text={example}
      isLoading={isLoading}
    />
  );
};

export default HomeContainer;
