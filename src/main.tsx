import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// Import the weights you need
import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/500.css"; // Medium
import "@fontsource/inter/700.css"; // Bold

// src/main.tsx
import './index.css';

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
