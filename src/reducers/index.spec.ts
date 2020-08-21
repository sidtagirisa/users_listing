import reducer from './index';
import { ActionType } from '../constants';
import { users } from '../testUtils/fixtures';

describe('reducer(state, action)', () => {
  it('ActionType.UPDATE_USERS', () => {
    const action = {
      type: ActionType.UPDATE_USERS,
      data: users,
    };
    const state = {
      users: [],
      loading: true,
    };
    const expectedState = {
      users: users,
      loading: true,
    };
    const updatedState = reducer(state, action);
    expect(updatedState).toEqual(expectedState);
  });

  it('ActionType.UPDATE_LOADING', () => {
    const action = {
      type: ActionType.UPDATE_LOADING,
      data: false,
    };
    const state = {
      users: [],
      loading: true,
    };
    const expectedState = {
      users: [],
      loading: false,
    };
    const updatedState = reducer(state, action);
    expect(updatedState).toEqual(expectedState);
  });
});
