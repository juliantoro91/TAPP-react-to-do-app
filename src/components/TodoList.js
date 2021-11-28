import React from "react";
import { CurvedContainer } from "./CurvedContainer";
import '../styles/TodoList.css';

const content = {
    height: '58%', // Height in percent
    displacement: 1, // how many radius the element gets displaced
    color: '--white',
    title: {
        text: 'You actual cards',
    },
}

function TodoList(props) {
    return (
        <CurvedContainer height={content.height} displacement={content.displacement} color={content.color}>
            <h3>{content.title.text}</h3>
            <section>
                <ul className="cards-list">
                    {props.children}
                </ul>
            </section>
        </CurvedContainer>
    );
}

export { TodoList };