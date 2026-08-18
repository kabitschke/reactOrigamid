import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produto from './components/Produto';




const App = () => {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='produto/:id' element={<Produto/>}/>
    <Route path='*' element={}/>
   </Routes>
   
   </BrowserRouter>
  );
};

export default App;
