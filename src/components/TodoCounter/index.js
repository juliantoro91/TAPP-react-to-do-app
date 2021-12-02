import React from "react";

function TodoCounter( { tasksState, language }) {

    function verifyPlural(number) {
        if (typeof(number) === "number") {
            let word = '';

            (language) ? word = " task" : word = " tarea";

            if (number !== 1) { word = word+'s' }

            return (number + word);
        }
        return (0 + " tasks");
    }

    function setCounterLabel() {
        if (language) {
            return "You've completed "+tasksState.completedTasks+" of "+verifyPlural(tasksState.totalTasks);
        } else {
            return "Has completado "+tasksState.completedTasks+" de "+verifyPlural(tasksState.totalTasks);
        }
    }

    return (
        <h2>{setCounterLabel()}</h2>
    );
}

export { TodoCounter };