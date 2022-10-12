import React from 'react'

const OthersMessage = ({lastMessage,message}) => {
    const isFirstMessageByUSer = !lastMessage || lastMessage.sender.username !== message.sender.username;
 
    return (
    <div className='msg-row'>
      {
      isFirstMessageByUSer &&  (
        <div className='message-avatar'
         style={{backgroundImage:message.sender && `url(${message.sender.avatar})`}} />
      )}


     { message?.attachments?.length>0 
                                ?(
                                  
                                  <img 
                                  src={message.attachments[0].file} 
                                  alt="message-attachment"
                                  className='message-image'
                                   style = {{marginLeft:isFirstMessageByUSer ? '4px' : '48px'}}
                                   />
                                ):
                                (
                                          <div className='message' style={{float:'left', backgroundColor:'#CABCDC' ,marginLeft:isFirstMessageByUSer ? '4px' : '48px'}}>
                                                        {message.text}

                                          </div>
                                )}
      </div>
        );
     };
export default OthersMessage;