//import { View, Text } from 'react-native'
import React, { useState } from 'react'
// import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { styles } from '../Styles/HomeStyle';
import { Button, Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { mStyles } from '../Styles/ModalStyle';
import { Switch } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';



const SafeLockModal = ({ visible, handleClick }) => {

    const [fingerOn, setFingerOn] = useState(false)


    return (
        <Modal style={{
            backgroundColor: 'black',
            borderRadius: 40,
            borderColor: 'blue',
            position: 'relative'
        }} isVisible={visible}>
            <AntDesign
                onPress={handleClick}
                style={mStyles.modalArrow}
                name="arrowleft" size={32} color="red" />
            <View style={mStyles.autoSaveD}>
                <Text style={mStyles.autoSaveH}>AutoSave</Text>
                <Text style={mStyles.autoSaveP}>You can turn ON or OFF your AutoSave to your Piggybank wallet below.</Text>

                <View style={styles.secondSection}>
                    <Text style={styles.enable}>Turn on Autosave</Text>
                    <Switch style={styles.switch} value={fingerOn} onValueChange={() => {
                        setFingerOn(!fingerOn)
                    }}

                    ></Switch>
                </View>
                <Button style={mStyles.autoSaveBut} title="Save Status" onPress={handleClick} />
            </View>
        </Modal>
    )
}

export default SafeLockModal