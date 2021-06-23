import React from 'react';
import Avatar from '@material-ui/core/Avatar';


export default function Community() {

    return (
        <div>
            {/*Поисковая строка*/}
            <form>
                <input type="text" placeholder="Искать здесь..." />
                <button type="submit"></button>
            </form>
            {/*Список игроков*/}
            <form className="container">
                <div >
                    <Avatar />
                    <p>Niko</p>
                </div>

            </form>
        </div>
    );
}

function IconGame() {
    return (
        <div>
            <Avatar />
            <p>Niko</p>
        </div>);
}