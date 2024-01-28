
import './App.css';
import List from './components/List';
import { useState } from 'react';
import Conversation from './components/Conversation';
function App() {

  const initData = {
    displayConversation: null,
    conversations: [
        {
            with: "Laura", convo: [
                { text: "Hi", sender: "self" },
                { text: "You there?", sender: "self" },
                { text: "Yeah, hi, what's up?", sender: "other" }
            ]
        },
        {
            with: "Dad", convo: [
                { text: "Have you finished your school work yet?", sender: "other" },
                { text: "Yes.", sender: "self" },
                { text: "What do you mean, yes?", sender: "other" },
                { text: "??", sender: "self" }
            ]
        },
        {
            with: "Shoobert", convo: [
                { text: "Shoobert!!!", sender: "self" },
                { text: "Dude!!!!!!!!", sender: "other" },
                { text: "Shooooooooo BERT!", sender: "self" },
                { text: "You're my best friend", sender: "other" },
                { text: "No, *you're* my best friend", sender: "self" },
            ]
        }
    ]
}


const [displayConversation,setDisplayConversation] = useState(initData.displayConversation)
const [convName,setConvName] = useState([])


const displayConv = function(){setDisplayConversation(null)}

const searchConversationByName=function(nameContact){

  const newConversation = [...initData.conversations]
  const withContact= newConversation.find(person =>{
    return person.with === nameContact
  })
  setDisplayConversation(nameContact)
  setConvName(withContact)

}


  return (
    <div className="App">
    <div>

      {displayConversation ? <div><Conversation backToTheApp={displayConv} conversationData={convName} displayConversation={displayConversation}/></div> : 
      <List listName={initData.conversations} searchConversationByName={searchConversationByName}/>    }
      
    </div>
    </div>
  );
}

export default App;
