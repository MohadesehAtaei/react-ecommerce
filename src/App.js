import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import Index from './layouts/Index';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <Index/>
    </BrowserRouter>
  );
}

export default App;