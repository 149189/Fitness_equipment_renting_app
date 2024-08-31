import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Equipment from './components/Equipment';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/equipment" component={Equipment} />
          <Route path="/login" component={Login} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
