import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'; 

import './App.css'

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="64308d40-98e7-487b-b47f-abfe081cb747"
            userName="Aquil"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;