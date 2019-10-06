import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
	state={
    	messages: []
    };

	handleSubmit= (message, user) => {
      	const newMessage = {
        	['username']: user,
          	['text']: message,
        };
        
    	this.setState(currState => ({
        	messages: currState.messages.concat([newMessage]),
        }));
    }

	render(){
    	return(
      		<div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">ReactND - Coding Practice</h1>
              </header>
              <div className="container">
      			{users.map(user => (
      				<ChatWindow 
      					key={user.username}
      					user={user}
						messages={this.state.messages}
						handleSend={this.handleSubmit}
      				/>
      			))}
      		  </div>
      		</div>
        );
    }
}

export default App;
