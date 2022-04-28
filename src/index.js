import React from 'react';
import { createRoot } from 'react-dom/client';

/**
 * CSS Import
 */
import './index.css';

/**
 * Routes Import
 */
import ReactRoutes from './routes';

const element = document.getElementById('root');
const root = createRoot(element);

root.render(
  <ReactRoutes />
);
