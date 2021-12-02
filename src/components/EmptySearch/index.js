import React from "react";

function EmptySearch({ language, searchText }) {
    return (
        <p>
            {(language) ? 
            "There is no results for " + searchText : 
            "No hay resultados para " + searchText }
        </p>
    );
}

export { EmptySearch }