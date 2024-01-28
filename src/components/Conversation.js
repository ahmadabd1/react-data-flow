import React from 'react'

export default function Conversation(props) {
    return (
        <div>
            <button onClick={props.backToTheApp}>Back</button>
            {props.conversationData.convo.map((talk,i) => {
// eslint-disable-next-line
                {return talk.sender === "self" ? <div key={i}>Me : {talk.text}</div> : <div key={i}>{props.displayConversation} : {talk.text}</div> }
            })}
        </div>
    )
}
