import React from "react";
import { TodoContext } from "../TodoContext";
import { CurvedContainer } from "../CurvedContainer";
import './TodoList.css';

const content = {
    height: '58%', // Height in percent
    displacement: 1, // how many radius the element gets displaced
    color: '--white',
}

function TodoList(props) {

    const {
        language,
    } = React.useContext(TodoContext);

    return (
        <CurvedContainer height={content.height} displacement={content.displacement} color={content.color}>
            <h3>{(language) ? "Your actual cards" : "Tus tarjetas actuales"}</h3>
            <section>
                <ul className="cards-list">
                    {props.children}
                </ul>
            </section>
        </CurvedContainer>
    );
}

export { TodoList };