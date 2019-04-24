import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <header className="Welcome-header">
          <img src={logo} className="Welcome-logo" alt="logo" />
          <p>
            Welcome to the React Playground.
          </p>
          <a
            className="Welcome-link"
            href="/list"
            rel="noopener noreferrer"
          >
            Continue to list
          </a>
        </header>
      </div>
    );
  }
}

export default Welcome;
