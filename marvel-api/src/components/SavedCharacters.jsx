import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CharacterCard from './CharacterCard';

const SavedCharacters = () => {
  const [savedCharacters, setSavedCharacters] = useState([]);

  useEffect(() => {
    const characters = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('character_')) {
        characters.push(JSON.parse(localStorage.getItem(key)));
      }
    }
    setSavedCharacters(characters);
  }, []);

  return (
    <Container>
      <Typography variant="h4">Saved Characters</Typography>
      <Grid container spacing={2}>
        {savedCharacters.map((character) => (
          <Grid item xs={12} sm={6} md={4} key={character.id}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SavedCharacters;
