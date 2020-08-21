import React from 'react';
import StateProvider from '../context/StateProvider/index';
import initialState from '../context/initialState';

export default function MockProvider(props: {
  additionalStateRequired?: object;
  children: JSX.Element;
}): JSX.Element {
  const { additionalStateRequired, children } = props;

  return (
    <StateProvider
      initialState={{
        ...initialState,
        ...additionalStateRequired,
      }}
    >
      {children}
    </StateProvider>
  );
}

MockProvider.defaultProps = {
  value: {
    state: {},
    dispatch: jest.fn(),
  },
};
