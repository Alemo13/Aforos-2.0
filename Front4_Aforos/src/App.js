import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation'
import PlacesList from './components/PlacesList'
import RestList from './components/RestList'
import ParList from './components/ParList'
import BarList from './components/BarList'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      
      <Routes>
        <Route path = "/" exact element = {<PlacesList/>} />
        <Route path = "/restaurantes" element = {<RestList/>} />
        <Route path = "/parqueaderos" element = {<ParList/>} />
        <Route path = "/bares" element = {<BarList/>} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
