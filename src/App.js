import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Inbox from './Pages/Inbox'
import Login from './Pages/Login'

function App() {
  return (
    <>
      <Router>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Inbox} />
      </Router>
    </>
  );
}

export default App;
