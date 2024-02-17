import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchResults from './pages/SearchResults';
import History from './pages/History';
import Title  from './pages/Title';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Title />} />
        <Route exact path="/search" element={<SearchResults />} />
        <Route exact path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
