import React, { useState } from 'react';
import './forum.css';

const Forum = ({color, user, date, changeUserdata}) => {
    const [threads, setThreads] = useState();
    const Fish = {first: "Goldfish"};
    let first = Fish['first'];

    const alert = (message) => {
        return " for the goldfish";
    }

    const words = ["free", "time", "no"];
    const [firstly, secondly, thirdly] = words;

    const lines = {straight: 45, curvy: 22};

    const {straight, curvy} = lines;

    return (
        <div className="forum">
            <button onClick={() => {changeUserdata()}}>Change user</button>
            <h1>Forum page{alert()} <span>{user.tartiness}</span> {color}</h1>
            <p>{firstly}</p>
            <p>{secondly}</p>
            <p>{thirdly}</p>
            <p>{straight}</p>
        
        </div>
    )
};

export default Forum;