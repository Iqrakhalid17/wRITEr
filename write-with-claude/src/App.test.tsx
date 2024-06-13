import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const linkElement1 = screen.getByText(/learn react/i);
  expect(linkElement1).toBeInTheDocument();

  const linkElement2 = screen.getByText(/learn react/i);
  expect(linkElement2).toBeInTheDocument();
});
