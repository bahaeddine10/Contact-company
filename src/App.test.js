import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  },
}));

import App from './App';

test('renders the home page heading', () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  expect(screen.getByText(/Welcome to Contact Company/i)).toBeInTheDocument();
});
