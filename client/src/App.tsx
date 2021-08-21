import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

interface AppProps {

}

const App: React.FC<AppProps> = () => {
  return(
    <Router>
      <Home />
    </Router>
  )
}

export default App