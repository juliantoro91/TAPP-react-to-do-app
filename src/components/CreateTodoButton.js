import React from "react";
import styled from "styled-components";
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

function CreateTodoButton() {
    return (
        <div className="add-card-button">
            <BaseButton width={content.addButton.width} urlActive={content.addButton.urlActive} urlInactive={content.addButton.urlInactive} completed={false} />
        </div>
    );
}

export { CreateTodoButton };