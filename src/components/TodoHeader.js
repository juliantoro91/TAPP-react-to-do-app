// IMPORT
import React from "react";
import styled from "styled-components";
import '../styles/TodoHeader.css';
import { TodoCounter } from "./TodoCounter";
import background from '../images/header-background.jpg';
import logo from '../images/logo.png';

// CONTENT 
const content = {
    proportion: "40%",
    background: {
        url: background,
        alt: 'A colored brain as background',
    },
    logo: {
        url: logo,
        alt: 'Tapp - Todo App Logo',
    },
}

// STYLES
const Header = styled.div`
    width: 100%;
    height: ${content.proportion};
    position: relative;
`;

// COMPONENT
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
        <Header className="header">
            <img src={content.background.url} alt={content.background.alt} />
            <div>
                <img src={content.logo.url} alt={content.logo.alt} />
                <TodoCounter completedTasks={props.completedTasks} totalTasks={verifyPlural(props.totalTasks)} />
            </div>
        </Header>
    );
}

export { TodoHeader };