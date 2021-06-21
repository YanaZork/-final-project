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
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

//npm install @material-ui/icons
//npm install @material-ui/core
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

function App() {

  return (
    <nav className="container" style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Router >
        <ul style={{
          flexDirection: 'column',
          flexWrap: 'nowrap',
          alignContent: 'space-between',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          listStyleType: 'none'
        }}


        >
          <li>
            <Link to="/"><HomeIcon style={{ fontSize: 60 }} /></Link>
          </li>
          <li>
            <Link to="/profile"><PersonOutlineIcon style={{ fontSize: 60 }} /></Link>
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

/*
display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: space-between;
    justify-content: space-evenly;
    align-items: center;



function IconGames(icon, name){}
*/

export default App;
