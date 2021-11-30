import React from "react";
import { TodoContext } from "../TodoContext";

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

function TodoCounter() {

    const { tasksState } = React.useContext(TodoContext);

    return (
        <h2>You've completed {tasksState.completedTasks} of {verifyPlural(tasksState.totalTasks)}</h2>
    );
}

export { TodoCounter };