import React, { Component } from 'react';

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
          <h1>React-Chat</h1>
        </header>
        <body>
          <div class = "chatContainer">
            <UserList/>
            <span class = "messageContainer">
              <MessageList/>
              <MessageBox/>
            </span>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
