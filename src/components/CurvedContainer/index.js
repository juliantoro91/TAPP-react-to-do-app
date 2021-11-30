import React from "react";
import styled from 'styled-components';
import './CurvedContainer.css';

const Container = styled.div`
    width: 100%;
    height: ${(p) => p.height};
    position: relative;
    --top: calc((${(p) => p.displacement}) * var(--base-radius));
    --container-color: var(${(p) => p.color});
`;

function AdjustDisplacement(displacement) {
    if (displacement <= 0) {
        return -1;
    } else {
        return (-2 * displacement);
    }
}

function CurvedContainer(props) {
    const displacement = AdjustDisplacement(props.displacement);
    return (
        <Container height={props.height} displacement={displacement} color={props.color}>
            <div className="container">
                <div>
                    <div className="container-content">
                        { props.children }
                    </div>
                </div>
            </div>
        </Container>
    );
}

export { CurvedContainer };