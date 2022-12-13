import { StyleSheet } from 'react-native'

import { Dimensions } from 'react-native';
export const { height, width } = Dimensions.get('window');
export const mStyles = StyleSheet.create({

    autoSaveD: {
        position: 'absolute',
        top: 0.19 * height,
        left: 0.05 * width,
        flex: 1
    },

    autoSaveH: {
        color: '#083E9E',
        marginBottom: 10,
        fontSize: 0.03 * height
    },
    autoSaveP: {
        color: '#fff',
        width: 0.8 * width,
        lineHeight: 21,
        // marginBottom: 0.4 * height
    },
    autoSaveBut: {
        padding: 10,
        backgroundColor: '#0D60D8',
        color: '#fff',
        marginTop: 14
    },
    otpCard: {
        flexDirection: 'row',
        backgroundColor: '#E86102',
        marginTop: 0.05 * height,
        padding: 12,
        width: 0.8 * width,
        borderRadius: 7,
        marginBottom: 30,
        borderBottomLeftRadius: 1,
    },
    keyIcon: {
        marginTop: 13,
        marginRight: 10
    },
    otpCardH: {
        color: '#fff'
    },
    otpCardP: {
        color: 'rgb(224, 215, 215)',
        width: 0.6 * width,
        lineHeight: 18,
        marginTop: 2,
        fontSize: 11.
    },
    securityForm: {
        backgroundColor: 'rgb(78, 74, 74)',
        borderColor: '#fff',
        marginTop: 10,
        marginBottom: 0.048 * height,
        borderRadius: 3,
        height: 0.068 * height,
        paddingLeft: 20,
        placeholderTextColor: "red",
        color: '#fff',
        width: 0.82 * width
    },
    formLabel: {
        color: 'rgb(224, 215, 215);'
    },
    btnTxt: {
        color: 'rgb(224, 215, 215)',
        textAlign: 'center',
        //  width: 0.5 * width
    },
    formPicker: {
        fontSize: 0.019 * height,
        position: 'absolute',
        right: 0.01 * width
    },
    modalArrow: {
        position: 'absolute',
        top: 0.05 * height,
        left: 0.07 * width,
        color: '#0D60D8'
    }
})

