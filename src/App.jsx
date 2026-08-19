import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './components/ExRouter1/Produtos';
import Header from './components/ExRouter1/Header';
import Footer from './components/ExRouter1/Footer';
import NotFound from './NotFound';
import Contato from './components/ExRouter1/Contato';

const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Produtos />} />
            <Route path='contato' element={<Contato />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
