import React from "react";
import { CurvedContainer } from "../CurvedContainer";
import './TodoList.css';

const content = {
    height: '58%', // Height in percent
    displacement: 1, // how many radius the element gets displaced
    color: '--white',
}

function TodoList({ children, language }) {

    return (
        <CurvedContainer height={content.height} displacement={content.displacement} color={content.color}>
            <h3>{(language) ? "Your actual cards" : "Tus tarjetas actuales"}</h3>
            <section id="todo-cards-list">
                <ul className="cards-list">
                    {children}
                </ul>
            </section>
        </CurvedContainer>
    );
}

export { TodoList };