import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CharacterCard = ({ character }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedCharacter = localStorage.getItem(`character_${character.id}`);
    if (savedCharacter) {
      setIsSaved(true);
    }
  }, [character.id]);

  const handleSave = () => {
    Swal.fire({
      title: '¿Guardar personaje?',
      text: "¿Estás seguro de que quieres guardar este personaje?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, guardar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem(`character_${character.id}`, JSON.stringify(character));
        Swal.fire("Guardado!", "Personaje guardado en LocalStorage", "success");
        setIsSaved(true);
      }
    });
  };

  const handleDelete = () => {
    Swal.fire({
      title: '¿Eliminar personaje?',
      text: "¿Estás seguro de que quieres eliminar este personaje?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem(`character_${character.id}`);
        Swal.fire("Eliminado!", "Personaje eliminado de LocalStorage", "success");
        setIsSaved(false);
      }
    });
  };

  return (
    <Card style={{ margin: '20px', maxWidth: '345px' }}>
      <CardMedia
        component="img"
        height="140"
        image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {character.description || 'Descripción no disponible'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/character/${character.id}`}>
          Mostrar Detalles
        </Button>
        {isSaved ? (
          <Button size="small" color="secondary" onClick={handleDelete}>
            Eliminar
          </Button>
        ) : (
          <Button size="small" color="primary" onClick={handleSave}>
            Guardar
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CharacterCard;
