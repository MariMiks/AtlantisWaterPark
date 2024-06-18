import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home';
import NavbarFooter from './pages/navbarFooter';
import Usuario from './pages/usuarios';
import VincularAcomodacao from './pages/vincularAcomodacao';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavbarFooter />}>
          <Route index element={<Home />} />
          <Route path='/usuario' element={<Usuario />} />
          <Route path='/vincularAcomodacao' element={<VincularAcomodacao />} />
        </Route>
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
