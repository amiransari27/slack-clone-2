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
import styled from 'styled-components';
import SideBar from './components/sidebar/SideBar';
import Chat from './components/chat/Chat';
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from './firebase';
import Login from './components/Login';

function App() {

  const [user, loading] = useAuthState(auth)

  return (
    <div className="app">
      <Router>

        {
          !user ? (
            <Login />
          ) :
            <>
              <Header />
              <AppBody>
                <SideBar />
                <Routes>
                  <Route exact path="/" element={<Chat />} />
                </Routes>
              </AppBody>
            </>
        }
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`