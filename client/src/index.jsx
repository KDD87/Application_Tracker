import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
