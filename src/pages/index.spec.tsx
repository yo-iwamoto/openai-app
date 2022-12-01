import Page from './index.page';
import { render } from '@testing-library/react';

describe('[page] /', () => {
  it('snapshot', () => {
    const { asFragment } = render(<Page />);

    expect(asFragment()).toMatchSnapshot();
  });
});
