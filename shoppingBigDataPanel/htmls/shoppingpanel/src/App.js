import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactJson from 'react-json-view'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Shopping Big Data Object Debugger</h1>
        </header>
        <p className="App-intro">
          <ReactJson src={this.props.message} />
        </p>
      </div>
    );
  }
}

export default App;
