import React from "react";

const Button = (props) => {
    console.log(props);
return (
    <div className="Button">
<button onClick = {console.log('ok')}> 
Dodaj </button>

    </div>
);
}
export default Button;