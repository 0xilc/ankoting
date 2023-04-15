import React from 'react'
import Message from './Message'


const ChatScreen = () => {
    if(1) return (
        <>
            <div className='chat-header'>
                <div className='chat-ident'>
                <div className='chat-photo'>
                    🐱
                </div>
                <div className='chat-name'>
                    Some Chat Name
                </div>
                </div>
                <div className='online-count'>
                +4 online
                </div>
                <div className='options'></div>
            </div>
            <div className='chat-wrapper'>
                <Message vendor="1"/>
                <Message vendor="0"/>
                <Message vendor="0"/>
                <Message vendor="0"/>
                <Message vendor="1"/>
                <Message vendor="0"/>
                <Message vendor="1"/>
                <Message vendor="0"/>
                <Message vendor="1"/>
            </div>
            <div className='userinput-wrapper'>
                <input type="text" className='userinput-field' placeholder='Type a message'></input>
                <button className='submit'>⌲</button>
            </div>
        </>
    )

    

    else return(
    <div className='cover'>
        <div className='tx-modal'>
            <div className='form'>
                <div className='form-row'>
                    <h4 className='title'>Start a new chat</h4>
                </div>
                <div className='form-row'>
                    <label for="uname">Username</label> 
                    <input className='tx-input' placeholder='@john.doe'></input>
                </div>
            </div>
        </div>
        <div className='tx-modal'>
            <div className='form'>
                <div className='form-row'>
                    <h4 className='title'>Join a room</h4>
                </div>
                <div className='form-row'>
                    <label for="uname">Room id</label> 
                    <input className='tx-input' placeholder='#123423'></input>
                </div>
            </div>
        </div>
        <div className='tx-modal'>
            <div className='form'>
                <div className='form-row'>
                    <h4 className='title'>Create a room</h4>
                </div>
                <div className='form-row'>
                    <label for="uname">Room name</label> 
                    <input className='tx-input' placeholder='Test Room'></input>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatScreen