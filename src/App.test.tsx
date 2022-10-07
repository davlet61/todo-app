import App from './App';
import { render, screen } from './utils/test-utils';

test('renders whole page with to do list', () => {
  render(<App />);
  const linkElement = screen.getByText(/things i have to do.../i);
  expect(linkElement).toBeInTheDocument();
});
