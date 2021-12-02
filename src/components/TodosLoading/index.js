import React from "react";
import { Loader } from "../Loader";

function TodosLoading({ quantity }) {
    return (
        <Loader quantity={quantity} />
    );
}

export { TodosLoading };