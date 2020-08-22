import React, { useContext } from 'react';
import { User } from '../../context/initialState';
import { StateContext } from '../../context/StateProvider';
import './UsersList.scss';
import Info from '../Info';

export default function UsersList(props: { filterValue: string }): JSX.Element {
  // @ts-ignore
  const { state } = useContext(StateContext);
  const { users } = state;

  let filteredUsers = users.filter((o: any) =>
    Object.keys(o).some(
      (k) =>
        typeof o[k] === 'string' &&
        o[k].toLowerCase().includes(props.filterValue.toLowerCase())
    )
  );

  return (
    <React.Fragment>
      <div>
        {filteredUsers.map((user: User) => (
          <div className="list" key={user.id}>
            <Info heading="name" value={user.name} />
            <Info heading="username" value={user.username} />
            <Info heading="email" value={user.email} />
            <Info
              heading="address"
              value={`${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
            />
            <Info
              heading="phone"
              value={<a href={`tel:${user.phone}`}>{user.phone}</a>}
            />
            <Info
              heading="website"
              value={user.website}
              description={`${user.company.catchPhrase}`}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
