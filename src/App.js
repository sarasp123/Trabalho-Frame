import './App.css';
import { Component } from 'react';
import Cabecalho from './Components/Cabecalho';
import Rodape from './Components/Rodape';

class App extends Component{ 
  state = { 
  noticias: [] 
  } 
  componentDidMount(){ 
  fetch('http://portal-noticias-ifms.herokuapp.com/apinoticias') 
  .then(response => response.json()) 
  .then(noticias => this.setState({noticias})) 
  } 
  render(){ 
  const { noticias } = this.state; 
  return (
    <>
    <Cabecalho />
  <div className="App"> 
  <h2>Últimas notícias</h2>
    {noticias.map(noticia => ( 
    <div key={noticia.id_noticia} >
    <h3 className='noticiaTitulo'> {noticia.titulo} </h3> 
    <p className='noticiaResumo'> Resumo: {noticia.resumo} </p>
    <p className='noticiaAutor'> Autor: {noticia.autor} </p>
    <p className='noticiaData'> Data da Publicação: {noticia.data_noticia} </p>
    <p className='noticiaNoticia'> {noticia.noticia} </p>
    <div className='divisor'></div>
  </div>
  ))} 
  </div>
  <Rodape />
  </>
  )
  }
}

export default App;