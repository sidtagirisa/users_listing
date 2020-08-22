import { render } from '@testing-library/react';
import React from 'react';
import SearchBox from '.';

describe('# SearchBox', () => {
  it('should render search box', async () => {
    const { container } = render(
      <SearchBox placeholder="search..." handleChange={() => {}} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
