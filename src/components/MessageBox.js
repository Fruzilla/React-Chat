import React, { Component } from 'react';

export default class MessageBox extends React.Component{
    render(){
        return(<div className="MessageBox">
            <input type = "text"></input>
            <span>
                <button type = "button">Send Message</button>
            </span>
        </div>);
    }
}