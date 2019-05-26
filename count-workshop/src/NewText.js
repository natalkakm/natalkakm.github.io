import React from "react";
import {Component} from "react";

// const NewText = (props) => {
//     console.log(props);

//     let objInput = null;
// return (
//     <div className="NewText">
//     <input type="number" ref={input => objInput = input}></input>
//     <button onClick = {() => {props.wpiszTekst(parseInt(objInput.value))}}>Wpisz tekst</button>
    
//     </div>
// );
// }

class NewText extends Component {

    setNewValue = () => {
        this.props.wpiszTekst(parseInt(this.objInput.value))
    }
    render() {
        return (
        <div className="NewText">
            <input type="number" ref={input => this.objInput = input}></input>
            <button onClick = {() => {}}>Wpisz tekst</button>
        </div>
        );
    }
}

export default NewText;