import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import CharacterList from './components/CharacterList';
import SavedCharacters from './components/SavedCharacters';
import CharacterDetail from './components/CharacterDetail';
import ComicList from './components/ComicList';

const App = () => {
  return (
    <Router>
      <AppBar position="static" style={{ backgroundColor: '#ED1D24' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Marvel Characters
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Buscar Personajes
          </Button>
          <Button color="inherit" component={Link} to="/guardados">
            Personajes Guardados
          </Button>
          <Button color="inherit" component={Link} to="/comics">
            Lista de Comics
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/guardados" element={<SavedCharacters />} />
        <Route path="/comics" element={<ComicList />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
