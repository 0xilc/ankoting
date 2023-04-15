import React from 'react'


function Profile() {
  return (
    <div className='profile'>

      <div className='tx-bg-text'>
        PROFILE
      </div>
      <div className='user-details-modal'>
        <div className='tx-modal'>
            <div className='pp-wrapper'>
              <label for="pp-upload" class="pp-input-wrapper">
                <div className='profile-picture'>
                  <div className='change-pp'>
                    Change Profile Picture
                  </div>
                  Jo
                </div>
              </label>
              <div className='username'>@john.doe</div>
            </div>
          <input type="file" id="pp-upload"></input>
          <form className='form'>
            <div className='form-row'>
              <label for="name">Name</label> 
              <input className='tx-input' id='name' placeholder='John Doe'></input>
            </div>
            <div className='form-row'>
              <label for="pword">Password</label> 
              <input className='tx-input' id='pword' placeholder='**********'></input>
            </div>
            <div className='form-row'>
              <button className='tx-input-submit'>Save Changes</button>
            </div>
          </form>
        </div>
      </div>
      <div className='changes-modal'>
      </div>
    </div>
  )
}

export default Profile