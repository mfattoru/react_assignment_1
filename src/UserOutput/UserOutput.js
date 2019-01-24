import React, { Component } from 'react';
import './UserOutput.css'

class UserOutput extends Component{

    render(props){
        return(
            <div class="UserOutput">
                <p> The name used is {this.props.username}</p>
                <p> And stuff keeps going </p>
            </div>
        );
    };
}

export default UserOutput;