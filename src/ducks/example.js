// import api from '../services/api';

export const Types = {
  IS_LOADING: 'example/IS_LOADING',
  EXAMPLE: 'example/EXAMPLE'
};

export const INITIAL_STATE = {
  isLoading: false,
  example: ''
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Types.IS_LOADING:
      return { ...state, isLoading: payload };
    case Types.EXAMPLE:
      return { ...state, example: payload };
    case Types.CLEAR:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const Creators = {
  setIsLoading: isLoading => ({
    type: Types.IS_LOADING,
    payload: isLoading
  }),
  setExample: example => ({
    type: Types.EXAMPLE,
    payload: example
  }),
  clear: () => ({
    type: Types.CLEAR
  }),
  getExample: async ({ dispatch }) => {
    dispatch(Creators.setIsLoading(true));

    // api
    //   .post('/example', {
    //     id: '123123',
    //     value: '456456'
    //   })
    //   .then(res => {
    //     dispatch(Creators.setExample(res.data));
    //     dispatch(Creators.setIsLoading(false));
    //   })
    //   .catch(() => Creators.setIsLoading(false));

    await new Promise(resolve => {
      setTimeout(() => {
        dispatch(Creators.setExample('Hi! Im an example'));
        dispatch(Creators.setIsLoading(false));
        resolve();
      }, 2000);
    });
  }
};
