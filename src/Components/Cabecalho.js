import React from "react";
import { Component } from "react";
import './Cabecalho.css';
import logo from '../img/logo.png'
    
class Cabecalho extends Component{
  render(){
    return(
    <div className="cabecalho">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="titulo" alt='Play Notícias'>Play Notícias</h1>
    </div>
    )
  }
}

export default Cabecalho