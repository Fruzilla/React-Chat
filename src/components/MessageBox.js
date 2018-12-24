import React, { Component } from 'react';

export default class MessageBox extends React.Component{
    render(){
        return(<div className="MessageBox">
            <input type = "text"></input>
            <span>
                <button class = "sendButton" type = "button" onClick= {this.submitMessage.bind(this)}>Send Message</button>
            </span>
        </div>);
    }

    //runs when the user either presses enter in the message box, or clicks on the send button
    //sanitizes their message, then submits it to the database
    //the message box is only being updated locally for testing purposes
    submitMessage(){
        
        //on click or enter, sanitize message. then submit it to the database.

        //testing sanitation
        var msg1 = this.sanitizeMessage("Hi there :) <img src='https://i.amz.mshcdn.com/zv9rgdAvFkkUDeqgJ1LZTJSDnWE=/950x534/filters:quality(90)/2015%2F04%2F25%2F0c%2Fjoker.thm.cb5e5.jpg'></img>");
        var msg2 = this.sanitizeMessage("<script>alert('Hacked :)');</script>");

        //submit to firebase db

        //for local testing purposes, add the message directly to the message list       
        var msgList = document.getElementsByClassName("MessageList")[0];
        msgList.innerHTML += "TEST:" + msg1;
        msgList.innerHTML += "TEST:" + msg2;          

    }

    //runs when the user submits a message
    //sanitize the message, making it database ready and removing any malicious code or exploits
    sanitizeMessage(msg){
        var msgCopy = msg;

        //remove html tags
        msgCopy = this.removeTags(msgCopy);
        
        //santize for firebase

        
        //once finished, return finalized message
        return msgCopy;
    }

    //removes and sanitizes any html tags, preventing the user from entering malicious code
    removeTags(html) {
        var tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';

        var tagOrComment = new RegExp(
            '<(?:'
            // Comment body.
            + '!--(?:(?:-*[^->])*--+|-?)'
            // Special "raw text" elements whose content should be elided.
            + '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*'
            + '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*'
            // Regular name
            + '|/?[a-z]'
            + tagBody
            + ')>',
            'gi');

        var oldHtml;
        do {
            oldHtml = html;
            html = html.replace(tagOrComment, '');
        } while (html !== oldHtml);
        return html.replace(/</g, '&lt;');
        }
}