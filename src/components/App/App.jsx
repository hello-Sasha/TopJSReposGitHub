import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {About} from '../About';
import { List } from '../List/List';
import './App.css';

export const  App= () =>{
  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
