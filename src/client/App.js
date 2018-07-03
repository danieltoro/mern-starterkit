/*
*
* *** Root Component ***
*
* Created by Daniel Toro <d.toro@outlook.com>
*
*/

import React, { Component } from 'react';

import bgImg from './img/light.jpg';

class App extends Component {
  render() {
    return (
      <div className="uk-position-relative">
        <img src={bgImg} alt="" />
        <div className="uk-position-top">
          <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li className="uk-active"><a href="#">Active</a></li>
                <li><a href="#">Item</a></li>
                <li>
                  <a href="#">Parent</a>
                  <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li className="uk-active"><a href="#">Active</a></li>
                      <li><a href="#">Item</a></li>
                      <li className="uk-nav-header">Header</li>
                      <li><a href="#">Item</a></li>
                      <li><a href="#">Item</a></li>
                      <li className="uk-nav-divider" />
                      <li><a href="#">Item</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
