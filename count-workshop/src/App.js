import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';
// import Heading from './Heading.js';
import Heading2 from './Heading2.js';

class App extends Component{

  render(){
  return (
    <div className="App">
      <Heading2 text="Aplikacja czarodziejska"/>
      <Counter initValue={33}/>
      
      <Heading2 text="Aplikacja czarodziejska v2"/>
      <Counter initValue={12}/>

      
    </div>
  );
}
}

export default App;
