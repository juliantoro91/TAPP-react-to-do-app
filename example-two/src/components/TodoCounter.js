import React from "react";

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

function TodoCounter(props) {
    return (
        <h2>You've completed {props.completedTasks} of {verifyPlural(props.totalTasks)}</h2>
    );
}

export { TodoCounter };