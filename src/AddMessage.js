import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component {
  	state={
    	message:''
    }

	isDisabled = () => {
    	return this.state.message === '';
  	};

	onInputChange = (event) => {
    	const message = event.target.value;
      	this.setState({
        	message
        });
    }

	handleSubmit = (event) => {
      	event.preventDefault();
    	this.props.handleSend(this.state.message);
    }
  
	render(){
    	return(
        	<div>
              <form className="input-group" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" placeholder="Enter your message..." onChange={this.onInputChange}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
        );
    }
}

AddMessage.propTypes = {
	handleSend: PropTypes.func.isRequired,
};

export default AddMessage;