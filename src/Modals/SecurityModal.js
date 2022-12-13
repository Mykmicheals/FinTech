import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import { mStyles, width } from '../Styles/ModalStyle';
import { styles } from '../Styles/HomeStyle';
import { FontAwesome } from '@expo/vector-icons';
// import { TextInput } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const SecurityModal = ({ visible, handleClick }) => {
    return (
        <Modal style={{
            backgroundColor: 'black',
            borderRadius: 30,
            borderColor: 'red',
            borderWidth: 1,
            borderColor: '#dfdfdf',
            borderBottomLeftRadius: 1,


            //  width: 1 * width

        }} isVisible={visible}>

            <AntDesign
                onPress={handleClick}
                style={mStyles.modalArrow}
                name="arrowleft" size={32} />

            <View style={mStyles.autoSaveD}>
                <Text style={mStyles.autoSaveH}>Set new security question</Text>
                <Text style={mStyles.autoSaveP}>Set a new security question to protect your PiggyVest account.</Text>

                <View style={mStyles.otpCard}>
                    <FontAwesome style={mStyles.keyIcon} name="key" size={24} color="white" />
                    <View>
                        <Text style={mStyles.otpCardH}>2FA: TAP TO GENERATE OTP</Text>
                        <Text style={mStyles.otpCardP}>2FA is required to complete this process for your own safety. Pls tap to generate otp then come back to proceed</Text>
                    </View>
                </View>

                <View>
                    <Text style={mStyles.formLabel}>Set your personal security question</Text>
                    <TextInput
                        placeholder='e.g where did you grow up'
                        placeholderTextColor="#000"
                        style={mStyles.securityForm} />

                    {/* <Text style={mStyles.formLabel}>Set your personal security question</Text>
                    <TextInput
                        placeholder='e.g where did you grow up'
                        placeholderTextColor="#000"
                        style={mStyles.securityForm} /> */}

                </View>

                <TouchableOpacity style={mStyles.autoSaveBut} title="Save Status" onPress={handleClick} >
                    <Text style={mStyles.btnTxt}>Set security Questions</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default SecurityModal