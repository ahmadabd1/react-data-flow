import React from 'react'

export default function Contact (props) {
  return (
    <div onClick={()=>props.searchConversationByName(props.conv)}> 
        {props.conv} </div>
  )
}
