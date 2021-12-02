import React from "react";

function EmptyTodos({ language }) {
    return (
        <p>
            {(language) ? 
            "Create your first TODO!" : 
            "¡Crea tu primera tarjeta"}
        </p>
    );
}

export { EmptyTodos };