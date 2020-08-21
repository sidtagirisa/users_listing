import { ActionType, GenericObject } from '../constants';
import { State } from '../context/initialState';

const namespace = 'reducer';

export default function reducer(
  state: State,
  action: { type: ActionType; data: any }
): State {
  switch (action.type) {
    case ActionType.UPDATE_USERS:
      return { ...state, users: action.data };

    case ActionType.UPDATE_LOADING:
      return { ...state, loading: action.data };

    default:
      throw new Error(`[${namespace}] unhandled action '${action.type}'`);
  }
}
