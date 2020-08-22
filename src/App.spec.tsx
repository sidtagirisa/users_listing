import React from 'react';
import { render, act } from '@testing-library/react';
import App from './App';
import request from 'axios';
import { users } from './testUtils/fixtures';

describe('# App', () => {
  let requestMock: any;
  beforeEach(() => {
    requestMock = jest.spyOn(request, 'get');
  });

  it('should render basic app', async () => {
    requestMock.mockResolvedValue({ data: users });
    let container: any;

    await act(async () => {
      container = render(<App />).container;
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
