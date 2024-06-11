import React, { useState } from 'react';
import { TextField, Container, Grid, Button, Box } from '@mui/material';
import Swal from 'sweetalert2';
import CharacterCard from './CharacterCard';
import { getCharactersByLetter } from './api';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [letter, setLetter] = useState('');

  const handleSearch = async () => {
    const results = await getCharactersByLetter(letter);
    setCharacters(results);
    if (results.length > 0) {
        Swal.fire("Encontrado", `Se encontraron ${results.length} personajes`, "success");
    } else {
      Swal.fire("No encontrado", "No se encontraron personajes", "error");
    }
  };

  return (
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt={5}>
        <TextField
          label="Buscar Personajes por Palabra o letra"
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          style={{ marginBottom: '20px', width: '300px' }}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Buscar
        </Button>
      </Box>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {characters.map((character) => (
          <Grid item xs={12} sm={6} md={4} key={character.id}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CharacterList;
