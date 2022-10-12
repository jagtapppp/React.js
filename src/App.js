import logo from './logo.svg';
import './App.css';
import { ChatEngine, } from 'react-chat-engine';
import ChatFeed  from './components/ChatFeed';

function App() {
  return (
    < div className='App'>
    <ChatEngine 
    height="100vh"
    projectID="06c29950-9aad-4a7a-bd2a-a31fa434ba22"
    userName="reactjs"
    userSecret="123123"
    renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps} />} 
    />
</div>
  );
}

export default App;
