import React from "react";
import styled from 'styled-components';
import '../styles/CurvedContainer.css';

const Variables = styled.div`
    --height-factor: ${(p) => p.heightFactor};
    --height: ${(p) => checkHeight(p.heightFactor)};
`;

function checkHeight(heightFactor) {
    if (typeof(heightFactor) === "number" ) {
        console.log(heightFactor);
        const height = 'calc(var(--display-size) * var(--height-factor))';
        return height;
    } else {
        return 'fit-content';
    }
}

function CurvedContainer(props) {
    //const heightFactor = checkHeight(props.heightFactor);
    //console.log(heightFactor);
    return (
        <Variables heightFactor={props.heightFactor}>
            <div className="container">
                <div>
                    <div>
                        { props.children }
                    </div>
                </div>
            </div>
        </Variables>
    );
}

export { CurvedContainer };