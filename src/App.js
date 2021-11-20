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
import styled  from 'styled-components';
import SideBar from './components/sidebar/SideBar';


function App() {
  return (
    <div className="app">
      <Router>
        <>
        <Header />
        <AppBody>
          <SideBar />
          <Routes>
            <Route exact path="/" element={<></>}/>
              
          </Routes>
        </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`