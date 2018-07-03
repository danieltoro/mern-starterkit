/*
*
* *** Start the Client App ***
*
* Created by Daniel Toro <d.toro@outlook.com>
*
*/

import React, { Component } from 'react';
import { render } from 'react-dom';

// DOM
const rootElement = document.getElementById('root');

class App extends Component {
  render() {
    return (
      <h1>Hola Mundo!</h1>
    )
  }
}

render(
  <App/>,
  rootElement
);

