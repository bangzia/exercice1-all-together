import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateUser from './CreateUser';

class App extends Component {
  state = {
    users: []
  };
  handleAddUser = user => {
    this.setState(prevState => ({ user: [...prevState.users, user] }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Create User</h2>
        <CreateUser onAddUser={this.handleAddUser} />
      </div>
    );
  }
}

export default App;
