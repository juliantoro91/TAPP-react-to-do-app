import React from "react";

function EmptySearch({ languageSupport, searchText }) {
    return (
        <p>
            {languageSupport.one + searchText }
        </p>
    );
}

export { EmptySearch }