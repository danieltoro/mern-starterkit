/*
*
* *** Start the Client App ***
*
* Created by Daniel Toro <d.toro@outlook.com>
*
*/

import React from 'react';
import { render } from 'react-dom';

// Import Root Component
import App from './App';

// DOM
const rootElement = document.getElementById('root');

// Rendering App
render(
  <App />,
  rootElement
);

