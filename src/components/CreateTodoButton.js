import React from "react";
import { BaseButton } from "./BaseButton";
import '../styles/CreateTodoButton.css';
import AddIcon from '../images/add-icon.png';

const content = {
    addButton: {
        width: 67,
        urlActive: AddIcon,
        urlInactive: AddIcon,
    },
}

const CreateTodo = () => {
    alert('Aquí se debería abrir el modal para crear el TODO');
}

function CreateTodoButton() {
    return (
        <div className="add-card-button">
            <BaseButton width={content.addButton.width} urlActive={content.addButton.urlActive} urlInactive={content.addButton.urlInactive} completed={false} action={CreateTodo} />
        </div>
    );
}

export { CreateTodoButton };