import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [pelicula, setPelicula] = useState({busqueda: '', resultado: {}});
  const [result, setResult] = useState();


  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(pelicula);


    //const resultbusqueda = fetchpeliculas(pelicula.busqueda);
    //setResult(resultbusqueda)


    const resultado = (
      <>
        <p>Mostrando resultados para {pelicula.busqueda}</p>
      </>
    );

    setResult(resultado);



  }


  const fetchPeliculas = (pelicula) => {

  }



  return (
    <>
      <h1>Info Peliculas</h1>

      <form onSubmit={handleSubmit}>
        <input 
          id="busqueda"
          onChange={(e) => setPelicula(prevSate => ({...prevSate, [e.target.id] : e.target.value}))} //cargo en pelicula.busqueda el titulo que se busco
          value={pelicula.busqueda}
          placeholder="Ex: 'Pulp Fiction'"
        />
        <input type="submit" value="Buscar"/>
      </form>

      {result}


    </>
  );
}


export default App;
