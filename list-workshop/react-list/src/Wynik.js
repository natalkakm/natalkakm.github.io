import React, {Component} from 'react';
import List from './List.js';



class Wynik extends Component{

    constructor(props) {
        super(props)
        this.state = {
            userName: '', 
            users: []
        }
    }
    removeUser = (id, name) => {
        let users = this.state.users;
        users = users.filter(currentUser => {
            if (currentUser.id !== id) return currentUser;
        });

        this.setState({users: users});
    }

    onInputChange = (event) => {
        this.setState({userName: event.target.value});
    }

    addNewUser = () => {

        let user = {
            name:this.state.userName,
            id: Date.now()
        }
        this.setState(prevState => {
            return({
                users: prevState.users.concat(user),
                userName: ''
            }
            );
        });
    }

render(){

    console.log(this.state.users)
    return( 
        <div>
        <h1> User's list </h1>
<p className="Wynik">hejka hej</p>
    <input type="text" placeholder="wpisz" 
    value={this.state.userName}
    onChange={this.onInputChange}
    />
<button onClick = {this.addNewUser}>
Dodaj </button>
<List 
users={this.state.users}
removeUser={this.removeUser}/>
</div>
    );
}
}

export default Wynik;