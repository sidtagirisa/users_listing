import { render } from '@testing-library/react';
import React from 'react';
import initialState from '../initialState';
import StateProvider, { StateContext } from '../StateProvider';

describe('StateProvider', () => {
  it('should provides initiated with initial state', () => {
    const renderChildren = jest.fn();
    render(
      <StateProvider initialState={initialState}>
        <StateContext.Consumer>{renderChildren}</StateContext.Consumer>
      </StateProvider>
    );

    expect(renderChildren).toHaveBeenCalledTimes(1);
    expect(renderChildren.mock.calls[0][0].state).toEqual(initialState);
  });
});
