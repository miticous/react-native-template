import { create } from 'apisauce';
import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';

const api = create({
  baseURL: `${Config.API_BASE_URL}`,
  timeout: 30000
});

api.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@templatereact:token');

  if (token) {
    request.headers = {
      Authorization: `Bearer ${token}`,
      accept: 'application/json',
      'content-type': 'application/json'
    };
  }
});

api.addRequestTransform(response => {
  if (!response.ok) throw response;

  return false;
});

export default api;
