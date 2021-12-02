import React from "react";
import { TodoItemLoader } from "../TodoItemLoader";

function TodosLoading({ language }) {
    return (
        <TodoItemLoader language={language} />
    );
}

export { TodosLoading };