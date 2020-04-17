import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders Hej', () => {
  const { getByText } = render(<App />);
  const element = getByText(/Hej/i);
  expect(element).toBeInTheDocument();
});
