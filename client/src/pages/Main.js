import React, { useState } from 'react'
import { ChatPrevBox,ChatScreen } from '../components'
import { ChatState } from '../context/ChatProvider'
import { createDefaultPic } from '../utils/designHelpers'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'

function Main() {

  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false)

  const handleLogout = () => {
    localStorage.setItem("userInfo", null);
    navigate("/auth")
  }
  const handleKeyDown = (event) => {
    if (event.key == 'Enter')
    { 
      handleSearch();
    }
  }


  const handleSearch = async () => {
    setSearchOpen(true)
    setLoading(true)
    if (!searchText) return;

    try{
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        }
      }
      const { data } = await axios.get(`http://localhost:3005/api/user?search=${searchText}`, config)
      setSearchResults(data);
      setLoading(false)
    } catch (error){
      toast.error(`An error occurred!`)
      console.log(error)
    }

  }
  
  const { user } = ChatState();
  let username = user?user.username:""
  return (
    <>
      <div className='main'>
        <div className='chats-list'>
          <div className='chats-list-profile'>
            <div className='base'>
                <div className='pic'>
                  {createDefaultPic(username)}
                </div>
                <div className='username'>
                  {user?(`@${username}`):""}
                </div>
            </div>
            <div className='settings'>
              <i className="fas fa-sign-out-alt" onClick={() => handleLogout()}></i>
            </div>
          </div>
          <div className='search-chats'>
            <input className='tx-input' id="search-input" placeholder='Search chat' onChange={(e) =>setSearchText(e.target.value)} onKeyDown={handleKeyDown}></input>
            {
              searchOpen ? 
              <i class="fas fa-times search-close" onClick={()=>{
                setSearchOpen(false)
                document.getElementById("search-input").value = ""
              }}></i> :
              <></>
            }
            
          </div>
          {
            searchOpen ? (<div className='search-results'>
              <div className='category'>
                <div className='category-title'>
                  Search Results
                </div>
                <div className='category-content'>
                  {
                    !loading ? 
                    ((searchResults.length > 0 ) ? 
                    searchResults.map(e=> 
                      <ChatPrevBox data={e} key={e._id}/>
                    )
                    :<>No result</>) : 
                    <div className='loading'>
                      <Spinner></Spinner>
                    </div>

                  }
                  {}
                </div>
              </div>
            </div>) : <></>
          }
          
          <div className='defaults'>
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
        </div>
        <div className='chat'>
          <ChatScreen/>
        </div>
      </div>
    </>
  )
}

export default Main