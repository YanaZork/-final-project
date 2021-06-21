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

function App() {
return(
  <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Главный экран</Link>
          </li>
          <li>
            <Link to="/profile">Профиль</Link>
          </li>
          <li>
            <Link to="/community">Игроки</Link>
          </li>
          <li>
            <Link to="/additional">Дополнительное</Link>
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
      </div>
    </Router>
);

}

export default App;
