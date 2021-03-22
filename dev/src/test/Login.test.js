import { render, screen } from '@testing-library/react';
import Login from '../pages/Login/index';

test('renders learn react link', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Joao/i);
  expect(linkElement).toBeInTheDocument();
});
