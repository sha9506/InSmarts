import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import Title  from './pages/Title';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="" element={<Title />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
