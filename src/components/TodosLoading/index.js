import React from "react";
import { TodoItemLoader } from "../TodoItemLoader";

function TodosLoading({ languageSupport }) {
    return (
        <TodoItemLoader languageSupport={languageSupport} />
    );
}

export { TodosLoading };