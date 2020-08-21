import React, { useContext, useEffect } from 'react';
import { ActionType } from '../../constants';
import { StateContext } from '../../context/StateProvider';
import { getUsers } from '../../services/users';

const init = async (dispatch: React.Dispatch<any>): Promise<void> => {
  const users = await getUsers();
  dispatch({
    type: ActionType.UPDATE_USERS,
    data: users,
  });
  dispatch({
    type: ActionType.UPDATE_LOADING,
    data: false,
  });
};

export default function Landing(props: { children: JSX.Element }): JSX.Element {
  // @ts-ignore
  const { state, dispatch } = useContext(StateContext);
  const { loading } = state;
  const { children } = props;

  useEffect(() => {
    init(dispatch);
  }, [dispatch]);

  if (loading) {
    return (
      <React.Fragment>
        <div>loading...</div>
      </React.Fragment>
    );
  }
  return <React.Fragment>{children}</React.Fragment>;
}
