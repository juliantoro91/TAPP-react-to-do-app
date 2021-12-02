import React from "react";

function TodosError({ error, languageSupport }) {
    return (
        <p>
            {languageSupport.one}
        </p>
    );
}

export { TodosError };