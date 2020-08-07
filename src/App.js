import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Inbox from './Pages/Inbox'
import Login from './Pages/Login'
import Draft from './Pages/Draft'
import Sent from './Pages/Sent'
import Flagged from './Pages/Flagged'
import Spam from './Pages/Spam'


function App() {
  const DefaultRoutes = () => {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/inbox" component={Inbox} />
          <Route exact path="/draft" component={Draft} />
          <Route exact path="/sent" component={Sent} />
          <Route exact path="/flagged" component={Flagged} />
          <Route exact path="/spam" component={Spam} />
        </Switch>
      </div>
    )
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route component={DefaultRoutes} />
      </Switch>
    </Router>
  )
}

export default App;
