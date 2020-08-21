import { ActionType } from '../constants';
import { State } from '../context/initialState';

export default function reducer(
  state: State,
  action: { type: ActionType; data: any }
): State {
  switch (action.type) {
    case ActionType.UPDATE_USERS:
      return { ...state, users: action.data };

    case ActionType.UPDATE_LOADING:
      return { ...state, loading: action.data };
  }
}
