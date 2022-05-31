
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Login from './components/Login';
import Conversations from './components/Conversations';
import {
  BrowserRouter as Router,
  Route, Routes,
} from "react-router-dom";
import { useState } from 'react';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Conversations' element={<Conversations />} />
      </Routes>
    </Router>
  );
}

export default App;