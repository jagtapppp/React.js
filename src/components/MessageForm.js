import React from 'react';
import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import {SendOutlined, PictureOutlined} from '@ant-design/icons';

const MessageForm = (props) => {
  const [message , setMessage]= useState('');
  const{chatId,creds} = props;


  const handleSubmit =(e)=>{
  e.preventDefault();

 const text =message.trim();

 if(text.length>0) sendMessage(creds,chatId,{ text });

 setMessage('');

}

  const handleChange = (event)=>{
    setMessage(event.target.value);
    isTyping(props,chatId);
  }
//to upload image
  const handleUpload = (event) =>{
    sendMessage(creds, chatId, {files:event.target.files , text: ''});

  }
  return (
    <>
    <form className='msg-form' onSubmit={handleSubmit}>
      <input className='input-msg' 
      placeholder='send a message'
      value={message}
      onChange={handleChange}
      onSubmit={handleSubmit}
      />
      <label htmlFor='upload-button'>
           <span className='image-button'>
          <PictureOutlined className='picture-icon' />
        </span>
      </label>
      <input type="file" multiple={false} id='upload-button'  onChange={handleUpload} style={{display:'none'}} />

      <button type="submit" className='send-button'>
        <SendOutlined className='send-icon' />
      </button>
    </form>
    </>
  )
}

export default MessageForm