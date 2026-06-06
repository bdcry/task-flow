import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyle } from './main.styled.ts';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element was not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
);
