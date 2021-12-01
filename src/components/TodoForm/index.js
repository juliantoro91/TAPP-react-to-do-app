import React from "react";
import { TodoContext } from "../TodoContext";
import { BaseButton } from "../BaseButton";
import './TodoForm.css';
import AcceptIcon from '../../images/accept-newTodo-icon.png';
import CancelIcon from '../../images/cancel-newTodo-icon.png';

const content = {
    acceptButton: {
        width: 50,
        urlActive: AcceptIcon,
    },
    cancelButton: {
        width: 50,
        urlActive: CancelIcon,
    }
}

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        todoAdd,
        setOpenModal,
        language,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(prevState => !prevState);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        todoAdd(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>{(language) ? "Add a new Card" : "Añadir una nueva tarjeta"}</label>
            <div className="textarea-container">
                <textarea
                    className="text-area"
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder={(language) ? "Todo task to be added" : "Nueva actividad para ser añadida"}
                />
            </div>
            <div className="buttons-container">
                <BaseButton
                    width={content.cancelButton.width}
                    urlActive={content.cancelButton.urlActive}
                    action={onCancel} 
                    type="button" />
                <BaseButton
                    width={content.acceptButton.width}
                    urlActive={content.acceptButton.urlActive}
                    action={onSubmit}
                    type="submit" />
            </div>
        </form>
    )
}

export { TodoForm };