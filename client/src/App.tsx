import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

interface AppProps {

}

const App: React.FC<AppProps> = () => {
  return(
    <Router>
      <Navbar />
      <div>styled components</div>
      <div>styled components</div>
      <div>styled components</div>
      <div>styled components</div>
      <div>styled components</div>
      <div>styled components</div>
    </Router>
  )
}

export default App