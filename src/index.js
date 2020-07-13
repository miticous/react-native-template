import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';
import { StateProvider } from './state';
import { mainInitialStates, mainReducer } from './ducks';
import i18n from './assets/locales/i18n';
import 'react-native-gesture-handler';
import Routes from './routes';

if (__DEV__) {
  // eslint-disable-next-line global-require
  require('./config/reactotron');
}

const App = () => (
  <StateProvider initialState={mainInitialStates} reducer={mainReducer}>
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </I18nextProvider>
  </StateProvider>
);

export default App;
