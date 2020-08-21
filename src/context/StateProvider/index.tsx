import React, { createContext, useReducer } from 'react';
import reducer from '../../reducers';
import { State } from '../initialState';

export const StateContext = createContext(null);
const { Provider } = StateContext;

const StateProvider = (props: {
  initialState: State;
  children: JSX.Element;
}): JSX.Element => {
  const { initialState, children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  // @ts-ignore
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default StateProvider;
