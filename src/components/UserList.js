import React, { Component } from 'react';

export default class UserList extends React.Component{
    render(){
        return(<div className = "UserList">
            <ul>
                <li>User1</li>
                <li>User2</li>
                <li>User3</li>
                <li>Elizabeth Joules</li>
                <li>an angry anaconda</li>
                <li>abcdefghijklmnopqrstuvxyz</li>
            </ul>
        </div>);
    }
}