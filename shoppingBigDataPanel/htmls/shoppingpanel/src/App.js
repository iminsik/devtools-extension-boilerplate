import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactJson from 'react-json-view'

class App extends Component {
  render() {
    let omnitureVisitorId = this.props.message.omnitureVisitorId;
    if(omnitureVisitorId !== undefined) {
      delete this.props.message.omnitureVisitorId;
      this.props.message.omnitureVisitorId = omnitureVisitorId;
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 classname="app-title">User behaviors captured in shopping matrix page</h1>
        </header>
        <p className="App-intro">
          <ReactJson displayDataTypes={false} theme="paraiso" src={this.props.message} />
        </p>
      </div>
    );
  }
}

export default App;
