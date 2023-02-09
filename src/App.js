import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/RecipePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Recipe from './pages/Recipe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/RecipePage' element={<Recipes />} />
        <Route path='/Recipe' element={<Recipe />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
