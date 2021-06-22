import './App.css';
import HomeScreen from './form/HomeScreen.js';
import Profile from './form/Profile.js';
import Community from './form/Community.js';
import Additional from './form/Additional.js';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

function App() {

  return (
    <nav className="container">
      <Router >
        <ul className="navbar">
          <li>
            <Link to="/"><HomeOutlinedIcon style={{ fontSize: 60 }} /></Link>
          </li>
          <li>
            <Link to="/profile"><PersonOutlineIcon style={{ fontSize: 60 }}/></Link>
          </li>
          <li>
            <Link to="/community"><PeopleOutlineIcon style={{ fontSize: 60 }} /></Link>
          </li>
          <li>
            <Link to="/additional"><FormatListBulletedIcon style={{ fontSize: 60 }} /></Link>
          </li>
        </ul>

        <Switch>
          <Route path="/additional">
            <Additional />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </nav>
  );
}

export default App;
