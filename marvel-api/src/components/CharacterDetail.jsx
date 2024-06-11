import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { getCharacterById, getPublicComics } from './api';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchCharacter = async () => {
      const characterData = await getCharacterById(id);
      setCharacter(characterData);
    };

    const fetchComics = async () => {
      const comicsData = await getPublicComics(id);
      setComics(comicsData);
    };

    fetchCharacter();
    fetchComics();
  }, [id]);

  return (
    <Container>
      {character && (
        <>
          <Typography variant="h3" gutterBottom>
            {character.name}
          </Typography>
          <CardMedia
            component="img"
            height="300"
            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
          <Typography variant="body1" paragraph>
            {character.description || 'Descripción no disponible'}
          </Typography>
        </>
      )}
      <Typography variant="h4" gutterBottom>
        Comics
      </Typography>
      <Grid container spacing={2}>
        {comics.map((comic) => (
          <Grid item xs={12} sm={6} md={4} key={comic.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {comic.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CharacterDetail;
