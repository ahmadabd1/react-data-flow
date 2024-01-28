import React from 'react'
import Contact from './Contact '

export default function List(props) {

 
    return (
        <div>
            <h1>List</h1>
            <div className='App'> {props.listName.map((conv,i) => <Contact key = {i}  searchConversationByName={props.searchConversationByName} conv={conv.with}/>)}</div>
        </div>
    )
}
