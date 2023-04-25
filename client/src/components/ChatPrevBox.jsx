import React from 'react';
import { createDefaultPic } from '../utils/designHelpers';


const ChatPrevBox = ({data}) => {
  console.log(data)
  
  if(data) 
  {
    return (
    <div className='chat-prev' >
      <div className='inner-wrapper'>
        <div className='chat-photo'>
          {createDefaultPic(data.username)}
        </div>
        <div className='chat-info'>
          <div className='chat-name'>{`@${data.username}`}</div>
          {
            data.latestMessage? (<div className='latest-message'>@user1: lastmessage</div>):<></>
          }
        </div>
      </div>
      <div className='chat-settings'></div>
    </div>
  )
  }
}

export default ChatPrevBox