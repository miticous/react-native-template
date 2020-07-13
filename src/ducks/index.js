import ExampleReducer, { INITIAL_STATE as ExampleInitialState } from './example';

export const mainReducer = ({ Example }, action) => ({
  Example: ExampleReducer(Example, action)
});

export const mainInitialStates = {
  Example: ExampleInitialState
};
