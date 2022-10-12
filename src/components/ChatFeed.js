import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import OthersMessage from './OthersMessage';
import './ChatFeed.css';


const ChatFeed = (props) => {
    // console.log(props);
    const {chats,activeChat,userName,messages} = props;
    const chat = chats && chats[activeChat];
    // console.log(chat,userName,messages);

// to know person read message
    const renderReadReceipts = (message, isMyMessage)=>{
        chat.people.map((person,index) =>{
            person.last_read == message.id && (
                
                <div key={`read_${index}`}
                className="read-receipt"
                style={{
                 float:isMyMessage? 'right' : 'left',
                 backgroundImage: `url(${person.person.avatar})`
                }}
                />
            
            )});
    }

    const renderMessages = () =>{
           const keys = Object.keys(messages);
        //    console.log(keys); 

        return keys.map((key,index) =>{
            const message = messages[key];
            const lastMessageKey = index===0 ? null:keys[index-1];
            const isMyMessage = userName===message.sender.userName;

            return (
                <div className="msg1" key={`msg_${index}`}>
                    <div className='message-block'>
                        {
                        isMyMessage 
                        ? < MyMessage message={message}/>
                        :<OthersMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>

                    <div className='read-receipts' style={{marginRight:isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                              {renderReadReceipts(message,isMyMessage)}                  
                   </div>
                </div>
            )

        });
    }

 if(!chat)
  return 'Loading.....'

  return (
    <div className='chatting'>
        <div className='chatting-title'>
            <div className='chat-title'>{chat.title}</div>
            <div className='chat-subtitle'>
                {/* {chat.people.map((person) =>`${person.person.username}`)} */}
                {localStorage.getItem('username')}
            </div>
        </div> 
      {renderMessages()}  
      <div style={{height: '100px'}} />
      <div className='message-form'>
        <MessageForm {...props}  chatId={activeChat}></MessageForm>
      </div>


    </div>
  )
}

export default ChatFeed