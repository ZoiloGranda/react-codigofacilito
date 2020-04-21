import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function MiComponente(){
  return <p>hola mundo</p>
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
    return (
      <div>
        <MiComponente/>
        <MiComponenteClase/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
