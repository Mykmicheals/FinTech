import { View } from 'react-native'
import React from 'react'
import { Modal as Modals, Portal, Text, Button, Provider } from 'react-native-paper';


const Modal = () => {
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    return (
        <Provider>
            <Portal>
                <Modals visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Text>Example Modal.  Click outside this area to dismiss.</Text>
                </Modals>
            </Portal>
            <Button style={{ marginTop: 30 }} onPress={showModal}>
                Show
            </Button>
        </Provider>
    )
}

export default Modal