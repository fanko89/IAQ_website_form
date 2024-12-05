import { render, screen } from '@testing-library/react';
import App from './App';

test('renders schedule a service heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Schedule a Service/i);
  expect(headingElement).toBeInTheDocument();
});