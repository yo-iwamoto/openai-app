import { Layout } from './Layout';
import { render } from '@testing-library/react';

describe('[component] Layout', () => {
  it('snapshot', () => {
    const { asFragment } = render(
      <Layout>
        <h1>Hello World!</h1>
      </Layout>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
