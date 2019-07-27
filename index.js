import React, { Component } from 'react';
import { render } from 'react-dom';
import IMC from './IMC';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <IMC />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
