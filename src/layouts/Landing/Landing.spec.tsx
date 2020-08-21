import { act, render } from '@testing-library/react';
import request from 'axios';
import React from 'react';
import Landing from '.';
import { users } from '../../testUtils/fixtures';
import MockProvider from '../../testUtils/MockProvider';

describe('# Landing', () => {
  let requestMock: any;
  beforeEach(() => {
    requestMock = jest.spyOn(request, 'get');
  });

  it('should render basic component', async () => {
    requestMock.mockResolvedValue({ data: users });
    let container: any;

    await act(async () => {
      container = render(
        <MockProvider additionalStateRequired={{ loading: false }}>
          <Landing>
            <p>children</p>
          </Landing>
        </MockProvider>
      ).container;
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
