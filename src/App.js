import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import UserList from './components/UserList.js'
import MessageList from './components/MessageList.js'
import MessageBox from './components/MessageBox.js'

//backend
import firebase from 'firebase'
import { connect } from 'react-firebase'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Chat</h1>
        </header>
        <body>
          <UserList/>
          <MessageList/>
          <MessageBox/>
        </body>
      </div>
    );
  }
}

export default App;
