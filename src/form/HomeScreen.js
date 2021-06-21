import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles({
    root: {
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        background: 'linear-gradient(263.84deg, rgba(161, 28, 223, 0.41) 23.46%, rgba(28, 71, 223, 0.2829) 73.57%)',

        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});

export default function HomeScreen() {
    const classes = useStyles();
    return (
        <div>

            <h1>Настольный футбол ⚽️</h1>
            <p>Тебе нравится играть в настольный футбол?</p>
            <p>Хочешь ворваться в топ игроков?</p>
            <p>Нажимай кнопку зарегистрироваться и не забывай отмечать вносить результат игры.</p>
            <p>Удачи 🤘</p>
            <Button className={classes.root}>Играть</Button>
            <h2>Популярные игроки 🔥</h2>
            {/*Список игроков
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />*/}
            <div className="container">
                <div>
                    <Avatar className={classes.large} />
                    <p>Niko</p>
                </div>
                <div>
                    <Avatar className={classes.large} />
                    <p>Niko</p>
                </div>
                <div>
                    <Avatar className={classes.large} />
                    <p>Niko</p>
                </div>
                <div>
                    <Avatar />
                    <p>Niko</p>
                </div>
                <div>
                    <Avatar />
                    <p>Niko</p>
                </div>
                <div>
                    <Avatar />
                    <p>Niko</p>
                </div>
            </div>
        </div>
    );
}


/*
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

<Router>
                <div>
                    <Link to="/profile/creat">
                        <button>Зарегистрироваться</button>
                    </Link>
                    <Link to="/profile/game">
                        <button>Играть</button>
                    </Link>
                    <Switch>
                        <Route path="/profile/game">
                            <Game />
                        </Route>
                        <Route path="/profile/creat">
                            <Creat />
                        </Route>
                    </Switch>
                </div>
            </Router>


function Creat() {
    return (<h1>creat</h1>);
}
function Game() {
    return (<h1>game</h1>);
}*/