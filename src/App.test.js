import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react web', () => {
  render(<App />);
  expect(screen.getByText('Cat Expense')).toBeInTheDocument();
});