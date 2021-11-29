import React from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";
import '../styles/TodoItem.css';
import DoneIcon from '../images/done-icon.png';
import DoneIconInactive from '../images/done-icon-inactive.png';
import DelIcon from '../images/del-icon.png';
import DelIconInactive from '../images/del-icon-inactive.png';

const content = {
    doneButton: {
        width: 45,
        urlActive: DoneIcon,
        urlInactive: DoneIconInactive,
    },
    delButton: {
        width: 22,
        urlActive: DelIcon,
        urlInactive: DelIconInactive,
    }
}

const StyledCard = styled.div`
    --button-width: ${content.doneButton.width + "px"};
    background-color: var(${(p) => p.color});
    color: var(--white);
    font-size: var(--sm);

    &[disabled] {
        background-color: var(--medium-gray);
        color: var(--text-color-dark);
        text-decoration: line-through;
    }
`;

function TodoItem({ text, completed, deleted, color, todoComplete, todoDelete }) {
    return (
        <li>
            <StyledCard className="card-item" color={color} disabled={completed}>
                <BaseButton width={content.doneButton.width} urlActive={content.doneButton.urlActive} urlInactive={content.doneButton.urlInactive} completed={completed} action={todoComplete} />
                <p>{text}</p>
            </StyledCard>
            <div className="deleteBtn">
                <BaseButton width={content.delButton.width} urlActive={content.delButton.urlActive} urlInactive={content.delButton.urlInactive} completed={completed} action={todoDelete} />
            </div>
        </li>
    );
}

export { TodoItem };