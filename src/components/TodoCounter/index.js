import React from "react";

function TodoCounter( { tasksState, languageSupport }) {

    function verifyPlural(number) {
        if (typeof(number) === "number") {
            let word = languageSupport.three;

            if (number !== 1) { word = word+'s' }

            return (number + word);
        }
        return (0 + " tasks");
    }

    function setCounterLabel() {
        return languageSupport.one + tasksState.completedTasks + languageSupport.two + verifyPlural(tasksState.totalTasks);
    }

    return (
        <h2>{setCounterLabel()}</h2>
    );
}

export { TodoCounter };