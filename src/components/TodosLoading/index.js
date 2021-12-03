import React from "react";
import { TodoItemLoader } from "../TodoItemLoader";

function TodosLoading({ languageSupport }) {

    const textContent = languageSupport.TodosLoading;

    return (
        <TodoItemLoader languageSupport={textContent} />
    );
}

export { TodosLoading };