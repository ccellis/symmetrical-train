// 1. Import dependencies
import React from 'react';
import { createRoot } from 'react-dom/client.js';

// 2. Create a React element
const element = React.createElement(
  'p',
  { id: 'helllo' },
  'do we wagmi yet!'
);

// 3. Render the application
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);