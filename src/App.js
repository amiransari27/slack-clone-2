import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home/Home';
import Header from './components/header/Header';


function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Routes>
            <Route exact path="/" element={<Header />}/>
              
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
