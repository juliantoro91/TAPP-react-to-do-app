import React from "react";
import styled from "styled-components";
import '../styles/BaseButton.css';

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
    const urlInactive = props.urlInactive;
    const completed = props.completed;

    return (
        <button><StyledButton src={setIconUrl(urlActive, urlInactive, completed)} width={props.width}/></button>
    );
}

export { BaseButton };