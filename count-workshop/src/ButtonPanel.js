import React from "react";

const ButtonPanel = (props) => {
    console.log(props);
return (
    <div className="ButtonPanel">
<button onClick = {props.changeCounterValue}> 

Dodaj 1 </button>

<button onClick = {props.zeroCounterValue}>zeruj</button>

<button onClick = {props.oldCounterValue}>Przywroc wartosc</button>

    </div>
);
}
export default ButtonPanel;