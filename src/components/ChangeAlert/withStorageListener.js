import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {
            console.log(change);
            console.log("Hubo cambios");
            if (change.key === 'TODOS_V1') {
                console.log("Hubo cambios");
                setStorageChange(true);
            }
        });

        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={setStorageChange}
            />
        );
    }
}

export { withStorageListener };