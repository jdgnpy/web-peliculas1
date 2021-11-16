import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [pelicula, setPelicula] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault();
    //console.log(pelicula);
    setResult('Mostrando resultados para ' + pelicula);
  }


  return (
    <>
      <h1>Info Peliculas</h1>

      <form onSubmit={handleSubmit}>
        <input 
          id="input"
          onChange={(e) => setPelicula(e.target.value)}
          value={pelicula}
          placeholder="Ex: 'Pulp Fiction'"
        />
        <input type="submit" value="Buscar"/>
      </form>
      <p>{result}</p>


    </>
  );
}


export default App;
