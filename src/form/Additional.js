import Results from './additional/Results.js';
import Statistics from './additional/Statistics.js';

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export default function Additional() {
    return (
        <Router className="container">
            <div>
                <ul className="navbar2">
                    <li>
                        <Link to="/additional/results">Результаты</Link>
                    </li>
                    <li>
                        <Link to="/additional/statistics">Диаграмма</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/additional/statistics">
                        <Statistics />
                    </Route>
                    <Route path="/additional/results">
                        <Results />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}