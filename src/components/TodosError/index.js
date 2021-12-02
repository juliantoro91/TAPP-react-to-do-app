import React from "react";

function TodosError({ error, language }) {
    return (
        <p>
            {(language) ? 
            "We apologize, an error occurred, please reload the app" :  
            "Lo sentimos, ha ocurrido un error, vuelve a recargar la página"}
        </p>
    );
}

export { TodosError };