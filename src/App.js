import React, { useState, useEffect } from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import {Typography, TextField, Button, Stack, Box, Modal} from '@mui/material';

function App() {
  const [pelicula, setPelicula] = useState('');
  const [bpeli, setBpeli] = useState(null);
  const [result, setResult] = useState('');
  //---- modal ----
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  //---- fin modal ----



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
  },[pelicula]);

//---- funcion click buscar ----
  const fClick = (event) => {
    event.preventDefault();
    //console.log(bpeli);
    fMapeo();
    setPelicula('');
  }

//------- funcion para mapear resultado --------
  const fMapeo = () =>{
    if (pelicula !== '' && bpeli.Error !== "Movie not found!"){
      const resultado = (
        <div>
          <br/>
          <Typography variant="h6" component="div" gutterBottom>
            Mostrando resultados para {pelicula}
          </Typography>   
          <br/>
          {/* Realizar mapeo y mostrar las peliculas que trajo la busqueda */}
          {/* Datos del fetch a utilizar - Title, Year, Runtime, Genre, Plot, Language, Poster */}
          
          <Stack spacing={2} direction="row">

            <Stack spacing={2} direction="row">
              <img width="250px" alt={bpeli.Title} src={bpeli.Poster} />
            </Stack>

            <Stack spacing={2} direction="column">
                  <Typography variant="h4" component="div">
                      {bpeli.Title}
                  </Typography>
                  
                  <Typography variant="body1" component="div">
                      Año: {bpeli.Year}
                  </Typography>

                  <Typography variant="body1" component="div">
                    Duracion: {bpeli.Runtime}
                  </Typography>

                  <Typography variant="body1" component="div">
                    Genero: {bpeli.Genre}
                  </Typography>
                
                  <Typography variant="body1" component="div">
                    Lenguaje: {bpeli.Language}
                  </Typography>

                  <Typography variant="body1" component="div">
                    Sinopsis: {bpeli.Plot}
                  </Typography>
            </Stack>
          </Stack> 
          <br/> <br/>
          {/*
          <Stack spacing={2} direction="row">

            <Stack spacing={2} direction="row">
              <img width="250px" alt={bpeli.Title} src={bpeli.Poster} />
            </Stack>

            <Stack spacing={2} direction="column">
                  <Typography variant="h4" component="div">
                      {bpeli.Title}
                  </Typography>
                  
                  <Typography variant="body1" component="div">
                      Año: {bpeli.Year}
                  </Typography>

                  <Typography variant="body1" component="div">
                    Duracion: {bpeli.Runtime}
                  </Typography>

                  <Typography variant="body1" component="div">
                    Genero: {bpeli.Genre}
                  </Typography>
                
                  <Typography variant="body1" component="div">
                    Lenguaje: {bpeli.Language}
                  </Typography>

                  <Typography variant="body1" component="div">
                    Sinopsis: {bpeli.Plot}
                  </Typography>
            </Stack>
          </Stack>
          */}
            {/* Modal */}
            {/* <Button onClick={handleOpen} variant="contained">Ver</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  test
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  test2
                </Typography>
              </Box>
            </Modal> */}

        </div>
      );
      setResult(resultado);
    }else{
      setResult(<p>No fue encontrado la pelicula {pelicula}, intente buscar nuevamente</p>)
    }
  }

  return (
    <>
      <Typography variant="h3" component="div">
        Info Peliculas
      </Typography>
      
      <div>
        <Stack spacing={2} direction="row">  
          {/*<input 
              onChange={(e) => setPelicula(e.target.value)}
              value={pelicula}
              placeholder="Ex: 'Pulp Fiction'"
            />*/}

            <TextField
              onChange={(e) => setPelicula(e.target.value)}
              value={pelicula}
              placeholder="Ex: 'Pulp Fiction'"
              size = "small"
            />
          
          
          
            <Button 
              variant="contained" 
              size="small"
              onClick={fClick}>
              Buscar
            </Button>
          
          
        </Stack>  
      </div>
      
      {result}

      
    </>
  );
}

export default App;