import React from "react";
import { TodoCounter } from "./TodoCounter";
import '../styles/TodoHeader.css';

import background from '../images/header-background.jpg';
import logo from '../images/logo.png';

const content = {
    background: {
        url: background,
        alt: 'A colored brain as background',
    },
    logo: {
        url: logo,
        alt: 'Tapp - Todo App Logo',
    },
}

function verifyPlural(number) {
    if (typeof(number) === "number") {
        if (number === 1) {
            return (number + " task");
        } else {
            return (number + " tasks");
        }
    }
    return (0 + " tasks");
}

function TodoHeader (props) {
    return (
        <section className="header">
            <img src={content.background.url} alt={content.background.alt} />
            <div>
                <img src={content.logo.url} alt={content.logo.alt} />
                <TodoCounter completedTasks={props.completedTasks} totalTasks={verifyPlural(props.totalTasks)} />
            </div>
        </section>
    );
}

export { TodoHeader };