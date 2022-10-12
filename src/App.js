import logo from './logo.svg';
import './App.css';
import { ChatEngine, } from 'react-chat-engine';
import ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {
if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    < div className='App'>
    <ChatEngine 
    height="100vh"
    projectID="06c29950-9aad-4a7a-bd2a-a31fa434ba22"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps} />} 
    />
</div>
  );
}

export default App;
