import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/signup/Signup';

interface AppProps {

}

const App: React.FC<AppProps> = () => {
  return(
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={Signup} />
    </Router>
  )
}

export default App