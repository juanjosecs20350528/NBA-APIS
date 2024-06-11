import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { getPublicComics } from './api';
import ComicCard from './ComicCard';

const ComicList = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      const results = await getPublicComics();
      setComics(results);
    };

    fetchComics();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Lista de Comics
      </Typography>
      <Grid container spacing={2}>
        {comics.map((comic) => (
          <Grid item xs={12} sm={6} md={4} key={comic.id}>
            <ComicCard comic={comic} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ComicList;
