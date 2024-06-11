import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';

const ComicCard = ({ comic }) => {
  return (
    <Card style={{ margin: '20px', maxWidth: '345px' }}>
      <CardMedia
        component="img"
        height="140"
        image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {comic.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {comic.description || 'Descripción no disponible'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={comic.urls[0].url} target="_blank">
          Más información
        </Button>
      </CardActions>
    </Card>
  );
};

export default ComicCard;
