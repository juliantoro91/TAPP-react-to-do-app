import React from "react";

function TodoCounter(props) {
    return (
        <h2>You've completed {props.completedTasks} of {props.totalTasks}</h2>
    );
}

export { TodoCounter };