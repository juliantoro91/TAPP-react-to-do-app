import { render } from "@testing-library/react";
import React from "react";
import { CurvedContainer } from "../CurvedContainer";
import './TodoList.css';

const content = {
    height: '58%', // Height in percent
    displacement: 1, // how many radius the element gets displaced
    color: '--white',
}

function TodoList(props) {

    const textContent = props.languageSupport.TodoList;

    const renderFunc = props.render || props.children;

    return (
        <CurvedContainer height={content.height} displacement={content.displacement} color={content.color}>
            <h3>{textContent.one}</h3>
            <section className="todolist-container">

                {props.error && props.onError()}
                {props.loading && props.onLoading()}
                {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
                {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

                {/* {props.searchedTodos.map(props.render)} */}
                {props.searchedTodos.map(renderFunc)}
            </section>
            {/* <section id="todo-cards-list">
                <ul className="cards-list">
                    {children}
                </ul>
            </section> */}
        </CurvedContainer>
    );
}

export { TodoList };