import logo from './logo.svg';
import './App.css';
import Perfil from './componentes/Pefil';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {
  //Declaramos un nuevo estado de contador
  const [contador, setContador] = useState(0);
  return (
    <div className="App">
     <div class ='contenedor-principal'>
      <h1>Mis Escritoras favoritas son</h1>
      <Perfil
        nombre='Laura Kinsale'
        pais='Misisipi, Estados Unidos'
        imagen='laura'
        cargo='Escritora'
        Genero='Literatura romántica'
        perfil='Laura Kinsale es una de las escritoras más reconocidas dentro de la literatura romántica gracias a sus historias cuidadas, intensas y originales.'
        facebook='https://www.facebook.com/people/Laura-Kinsale/100063701590406/'
        youtube='https://www.youtube.com/channel/UCR33nMElMYAFkavLBQYvOmg'
        twitter='https://twitter.com/LauraKinsale'
      />
      <Perfil
        nombre='Sherrilyn McQueen'
        pais='Estados Unidos'
        imagen='sherrilyn'
        cargo='Escritora'
        Genero='Literatura romántica Paranormal'
        perfil='Escritora estadounidense de superventas. Con su nombre de casada Sherrilyn Kenyon escribe urban fantasy, y es conocida sobre todo por su serie de los Cazadores Oscuros (Dark Hunter).'
        facebook='https://www.facebook.com/mysherrilyn/'
        youtube='https://www.youtube.com/user/DarkHunterSeries'
        twitter='https://twitter.com/mysherrilyn'
      />
      <Perfil
        nombre='Jane Austin'
        pais='FWinchester, Reino Unido'
        imagen='jane'
        cargo='Escritora'
        Genero='Realismo'
        perfil='Fue una novelista británica que vivió durante la época georgiana. La ironía que empleaba para dotar de comicidad a sus novelas hace que Jane Austen sea considerada entre los clásicos de la novela inglesa'
        facebook=''
        youtube=''
        twitter=''
      />
      {/*Implementacion de un contador*/}
      <p>Has hecho clic {contador} veces </p>
      <button onClick={()=>setContador(contador+1)}>
        Haz clic aquí
      </button>
      {/*Implementacion de un contador*/}
      <p>Has hecho clic {contador} veces </p>
      <button onClick={()=>setContador(contador-1)}>
        Haz clic aquí
      </button>
     </div>
    </div>
  );
}

export default App;