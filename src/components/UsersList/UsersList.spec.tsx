import { render } from '@testing-library/react';
import React from 'react';
import UsersList from '.';
import { users } from '../../testUtils/fixtures';
import MockProvider from '../../testUtils/MockProvider';

describe('# UsersList', () => {
  it('should render list of users', async () => {
    const { container } = render(
      <MockProvider additionalStateRequired={{ loading: false, users }}>
        <UsersList filterValue="" />
      </MockProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render anything if filtered value is not present', async () => {
    const { container } = render(
      <MockProvider additionalStateRequired={{ loading: false, users }}>
        <UsersList filterValue="some-key" />
      </MockProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
