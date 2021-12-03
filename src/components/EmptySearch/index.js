import React from "react";

function EmptySearch({ languageSupport, searchText }) {

    const textContent = languageSupport.EmptySearch;

    return (
        <p>
            {textContent.one + searchText }
        </p>
    );
}

export { EmptySearch }