import React from "react";

function useStorageListener(setOpenModal, setModalType, sincronize) {
    const [storageChange, setStorageChange] = React.useState(false);

    React.useEffect(() => {
        const onChange = (change) => {
            if (change.key === 'TODOS_V1') {
                setOpenModal(true);
                setModalType('alert');
                setStorageChange(true);
            }
        };

        window.addEventListener('storage', onChange);

        return () => {
            window.removeEventListener('storage', onChange);
        };
    }, []);

    const toggleShow = () => {
        sincronize();
        setStorageChange(prevState => !prevState);
    }

    return {
        show: storageChange,
        toggleShow,
    };
}

export { useStorageListener };