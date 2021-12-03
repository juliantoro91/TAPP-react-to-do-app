import React from "react";
import styled from "styled-components";
import './TodoCounter.css'

function TodoCounter( { tasksState, loading, languageSupport }) {

    const textContent = languageSupport.TodoCounter;

    function verifyPlural(number) {
        if (typeof(number) === "number") {
            let word = textContent.three;

            if (number !== 1) { word = word+'s' }

            return (number + word);
        }
        return (0 + " tasks");
    }

    function setCounterLabel() {
        return textContent.one + tasksState.completedTasks + textContent.two + verifyPlural(tasksState.totalTasks);
    }

    return (
        <h2 className={`${!!loading && "TodoCounter--loading"}`}>
            {setCounterLabel()}
        </h2>
    );
}

export { TodoCounter };