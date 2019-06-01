import React, {Component} from 'react';


const List = (props)  => {

    return <div>
        <ul> 
        {
        props.users.map(currentUser =>
            
        <li key={currentUser.id} onClick={() =>props.removeUser(currentUser.id, currentUser.name)}> {currentUser.name}</li>
            )
        }
        </ul>
        </div>
}

    export default List;