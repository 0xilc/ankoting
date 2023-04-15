import React from 'react'
import { ChatPrevBox,ChatScreen } from '../components'


function Main() {
  return (
    <>
      <div className='main'>
        <div className='chats-list'>
          <h3 className='chats-list-title'>⎾Ankoting⏌</h3>
          <div className='search-chats'>
            <input className='tx-input' placeholder='Search chat'></input>
          </div>
          <div className='category'>
            <div className='category-title'>
              Recent Chats
            </div>
            <div className='category-content'>
              <ChatPrevBox/>
              <ChatPrevBox/>
              <ChatPrevBox/>
              <ChatPrevBox/>
              <ChatPrevBox/>
            </div>
          </div>
          <div className='category'>
            <div className='category-title'>
              Favorites
            </div>
            <div className='category-content'>
              <ChatPrevBox/>
              <ChatPrevBox/>
              <ChatPrevBox/>
              <ChatPrevBox/>
              <ChatPrevBox/>
            </div>
          </div>
        </div>

        <div className='chat'>
          <ChatScreen/>
        </div>
      </div>
    </>
  )
}

export default Main