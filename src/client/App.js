/*
*
* *** Root Component ***
*
* Created by Daniel Toro <d.toro@outlook.com>
*
*/

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="uk-position-relative">
        <img src="../docs/images/light.jpg" alt="" />
          <div className="uk-position-top">
            <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar>
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
                        <li className="uk-nav-divider"></li>
                        <li><a href="#">Item</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
      </div>
    )
  }
}

export default App;
