import React from 'react'
const uid = "12342"

const Message = (props) => {
  if(props.vendor === "1"){
    return (
      <div className='message-row'>
        <div className='message-container'>
          <div className='content'>asdlfkasdlfkasldfklsdfjalşsdfjlşsdlfasldf sapiente eum. Et?
          </div>
          <div className='date'>
            3.14PM
          </div>
        </div>
      </div>
    )
  }
  else if(props.vendor === "0"){
    return(
      <div className='message-row message-sent'>
        <div className='message-container'>
          <div className='content'>asdlfkasdlfkasldfklsdfjalşsdfjlşsdlfasldf sapiente eum. Et?
          </div>
          <div className='date'>
            3.14PM
          </div>
        </div>
      </div>
    )
  }
  else{
    return(
      <div className='message-row'>
        <div className='message-container'>
          <div className='content'>asdlfkasdlfkasldfklsdfjalşsdfjlşsdlfasldf sapiente eum. Et?
          </div>
          <div className='date'>
            3.14PM
          </div>
        </div>
      </div>
    )
  }
  
}

export default Message
