import { render } from '@testing-library/react';
import React from 'react';
import Info from '.';

describe('# Info', () => {
  it('should render with info passed', async () => {
    const { container } = render(
      <Info heading="some value" value="some value" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with description if passed', async () => {
    const { container } = render(
      <Info
        heading="some value"
        value="some value"
        description="some description"
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
