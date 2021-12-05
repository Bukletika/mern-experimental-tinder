import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="Hello!"
                timestamp="40 seconds ago"
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvn2ApxtXjxawqKoJtSR-KxfpIQACaxc5M-A&usqp=CAU"
            />
            <Chat
                name="Elen"
                message="Hi"
                timestamp="3 seconds ago"
                profilePic="https://www.unigreet.com/wp-content/uploads/2020/04/Smiley-816x1024.jpg"
            />
            <Chat
                name="Tester"
                message="How are you?"
                timestamp="20 seconds ago"
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvn2ApxtXjxawqKoJtSR-KxfpIQACaxc5M-A&usqp=CAU"
            />
            <Chat
                name="Tester Two"
                message="Hello!"
                timestamp="1 hours ago"
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvn2ApxtXjxawqKoJtSR-KxfpIQACaxc5M-A&usqp=CAU"
            />
        </div>
    )
}

export default Chats
