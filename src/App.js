import React, { Component } from 'react';
import './UserInput/UserInput';
import './UserOutput/UserOutput';

import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
      names: [
        { username: 'UserName #'+ Math.floor(Math.random()*100)},
        { username: 'UserName #'+ Math.floor(Math.random()*100)},
        { username: 'UserName #'+ Math.floor(Math.random()*100)}
      ]
  };

  changeUsernameHandler = (event) => {
    this.setState({
      names: [
        { username: event.target.value},
        { username: event.target.value},
        { username: event.target.value}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Assignment 01</h1>
        <UserInput
          changed={this.changeUsernameHandler}
          initial={this.state.names[0].username}/>
        <UserOutput 
          username={this.state.names[0].username}/>
        <UserOutput 
          username={this.state.names[1].username}/>
        <UserOutput 
          username={this.state.names[2].username}/>
      </div>
    );
  }
}

export default App;
