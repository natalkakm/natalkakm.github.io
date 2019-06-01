import React, {Component} from 'react';


const List = (props)  => {
    console.log(props.users);

    return <div>
        <ul> 
        {
        props.users.map(currentUser =>
            
        <li key={currentUser}> {currentUser}</li>
            )
        }
        </ul>
        </div>
}

    export default List;