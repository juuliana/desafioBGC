import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Products from './pages/Products';
import './global.css';

function App() {
  return (
    <>
      <Router>
        <Menu/>
      </Router>
     
      <Home/>
      <Products/>
    </>
  );
}

export default App;