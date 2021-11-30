import React from "react";
import styled from "styled-components";
import './BaseButton.css';

const StyledButton = styled.img`
    width: ${(p) => p.width};
`;

function setIconUrl(urlActive, urlInactive, completed) {
    if(completed) {
        return urlInactive;
    } else {
        return urlActive;
    }
}

function BaseButton(props) {
    const urlActive = props.urlActive;
    let urlInactive = props.urlInactive;
    let completed = props.completed;
    if (completed === undefined) {
        urlInactive = props.urlActive;
        completed = false;
    }

    return (
        <button type={props.type} 
            onSubmit={props.type === 'submit' ? props.action : undefined}
            onClick={props.type === 'button' ? props.action : undefined} >
            <StyledButton 
                src={setIconUrl(urlActive, urlInactive, completed)} 
                width={props.width} />
        </button>
    );
}

export { BaseButton };