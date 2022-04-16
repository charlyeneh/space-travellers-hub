import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Rocket from '../rockets/Rocket';

it('it works', () => {
  const tree = render(
    <Provider store={store}>
      <Rocket />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  render(
    <Provider store={store}>
      <Rocket />
    </Provider>,
  );
  /* screen.debug(); */
  expect(screen.getByText(/Reserve Rocket/)).toBeInTheDocument();
});
