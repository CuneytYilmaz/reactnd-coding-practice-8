import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageHistory from './MessageHistory';
import AddMessage from './AddMessage';

class ChatWindow extends Component {  
  
  	handleSend= (message) => {
    	this.props.handleSend(message, this.props.user.username);
    }
  	
	render(){
      	const {user, messages} = this.props;
      
    	return(
        	<div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>
			<MessageHistory messages={messages} user={user} />
			<AddMessage handleSend={this.handleSend} />
          </div>
        );
    }
}

ChatWindow.propTypes = {
  	user: PropTypes.object.isRequired,
  	messages: PropTypes.array.isRequired,
  	handleSend: PropTypes.func.isRequired,
};

export default ChatWindow;