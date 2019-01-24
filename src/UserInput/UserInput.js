import React, { Component } from 'react';

class UserInput extends Component{
    style = {
        border: '2px solid blue',
        borderRadius: '4px',
        padding: '5px'
    }

    render(props){
        return(
            <input 
                style={this.style}
                type="text"
                onChange={this.props.changed}
                value={this.props.initial}/>
        );
    };
}

export default UserInput;