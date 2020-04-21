import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function A(props){
  return <p>hola {props.nombre}</p>
}

function B(props){
  return <p>{props.nombre}: 100</p>
}

class MiComponenteClase extends Component{
  render(){
    return <p>Hola soy de la clase</p>
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let nombre="Zoilo"
    return (
      <div>
        <A nombre={nombre}/>
        <B nombre={nombre}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
