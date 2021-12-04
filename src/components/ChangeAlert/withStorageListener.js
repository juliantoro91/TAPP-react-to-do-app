import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);

        const setOpenModal = props.setOpenModal;
        const setModalType = props.setModalType;

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
            props.sincronize();
            setStorageChange(prevState => !prevState);
        }

        return (
            <WrappedComponent
                languageSupport={props.languageSupport}
                show={storageChange}
                toggleShow={toggleShow}
            />
        );
    }
}

export { withStorageListener };