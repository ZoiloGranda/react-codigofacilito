import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Formulario extends Component{
  constructor(props){
    super(props)
    this.state={
      email:'',
      password:''
    }
  }

  syncChanges(value, property){
    let state = {}
    state[property] = value
    this.setState(state)

  }

  submitForm=()=>{
    console.log(this.state)
  }

  render(){
    return(
      <form>
      <input
      onChange={(ev)=>{this.syncChanges(ev.target.value,'email')}}
      type="email"
      value={this.state.email}
      placeholder="Email"></input>
      <input
      onChange={(ev)=>{this.syncChanges(ev.target.value,'password')}}
      type="password"
      value={this.state.password} placeholder="Password"></input>
      <div>
      <button
      onClick={this.submitForm}
      value="Iniciar Sesion">Iniciar Sesion</button>
      </div>
      </form>
    )
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
        <Formulario/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
