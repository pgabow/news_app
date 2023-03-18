import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContent from 'components/AppContent';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <AppContent/>
    </BrowserRouter>
  );
}

export default App;
