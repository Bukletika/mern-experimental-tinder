import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Mark',
            image: 'https://www.unigreet.com/wp-content/uploads/2020/04/Smiley-816x1024.jpg',
            message: 'Hello'
        },
        {
            message: 'Hello! How are you?'
        },
        {
            name: 'Mark',
            image: 'https://www.unigreet.com/wp-content/uploads/2020/04/Smiley-816x1024.jpg',
            message: 'Fine!',
        }
    ]);

    const handleSend= e => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You mathed with Mark on 10.10.2021</p>
            {messages.map(message => (

                message.name ?  (
                    <div className="chatScreen__message">
                        <Avatar 
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div> 
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div> 
                )  
            ))}

        
            <form className="chatScreen__input">
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)} 
                    className="chatScreen__inputField" 
                    type="text" 
                    placeholder="Type a message"
                />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">Send</button>
            </form>
            
        </div>
    )
}

export default ChatScreen
