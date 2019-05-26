import React, {Component} from 'react';
import ButtonPanel from "./ButtonPanel.js";
import NewText from "./NewText.js";

class Counter extends Component{

constructor(props) {
    super(props);
    this.state = { 
        counterValue: this.props.initValue
    }
}

changeValue = () => {
    this.setState((prevValue)=> {
        return({
            counterValue: prevValue.counterValue + 1
        })
    })
}

zeroValue = () => {
    this.setState(()=> {
        return({
            counterValue: 0
        })
    })
}

oldValue = () => {
    this.setState(() =>{
        return({
            counterValue: this.props.initValue
        })
    }); 
}

wpiszTekst = (newValue)=> {
    this.setState({counterValue: newValue});
}

  render(){
  return (
    <div className="Counter">
      Licznik: {this.state.counterValue}
      <ButtonPanel changeCounterValue = {this.changeValue} 
      zeroCounterValue = {this.zeroValue}
      oldCounterValue = {this.oldValue} 
      />

      <NewText wpiszTekst = {this.wpiszTekst}/>
    </div>
  );
}
}

export default Counter;
