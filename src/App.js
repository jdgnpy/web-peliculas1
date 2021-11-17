import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [pelicula, setPelicula] = useState('');
  const [bpeli, setBpeli] = useState(null);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);
  const [result, setResult] = useState('');

//---- hook use effect ----
  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=c7a38bee&t="+ pelicula +"&plot=full")
    .then(response =>{
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then(data =>{
      setBpeli(data);
    })
    .catch(error =>{
      console.log(error);
    })
    //.finally(()=>{
    //  setLoading(false);
    //})
  },[pelicula]);


//---- funcion click buscar ----
  const fClick = (event) => {
    event.preventDefault();
    //console.log(bpeli);
    fmapeo();
    setPelicula('');
  }

//------- funcion para mapear resultado --------
  const fmapeo = () =>{
    if (pelicula !== '' && bpeli.Error !== "Movie not found!"){
      const resultado = (
        <>
          <p>Mostrando resultados para {pelicula}</p>
          
          {/* Realizar mapeo y mostrar las peliculas que trajo la busqueda */}
          {/* Datos del fetch a utilizar - Title, Year, Runtime, Genre, Plot, Language, Poster */}
          <img width="200px" alt={bpeli.Title} src={bpeli.Poster} />
          <p>Titulo: {bpeli.Title}</p>
          <p>Año: {bpeli.Year}</p>
          <p>Duracion: {bpeli.Runtime}</p>
          <p>Genero: {bpeli.Genre}</p>
          <p>Lenguaje: {bpeli.Language}</p>
          <p>Sinopsis: {bpeli.Plot}</p>
        
        </>
      );
      setResult(resultado);
    }else{
      setResult(<p>No fue encontrado la pelicula {pelicula}, intente buscar nuevamente</p>)
    }
  }


  return (
    <>
      <h1>Info Peliculas</h1>

      <form>
        <input 
            onChange={(e) => setPelicula(e.target.value)}
            value={pelicula}
            placeholder="Ex: 'Pulp Fiction'"
          />
        <button onClick={fClick}>Buscar</button>
      </form>  

      {result}
    </>
  );
}


export default App;
