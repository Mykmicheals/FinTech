import { StyleSheet } from 'react-native'
import { height, width } from './ModalStyle'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
        color: '#fff',
        zIndex: 10,
    },
    invest: {
        marginLeft: 20,
        fontSize: 16,
        marginTop: 5,
        // color: '#7AAEE1',
        color: '#42648D'
    },
    userName: {
        fontSize: 30,
        marginLeft: 20,
        marginTop: 1,
        color: '#fff',
        textTransform: 'capitalize'
    },
    containerTop: {
        flexDirection: 'row',
        marginTop: '10%',
    },
    profileImage: {
        marginLeft: 60,
        height: 60,
        width: 60,
        borderRadius: 50,
        position: 'absolute',
        right: 42
    },
    savingsCard: {
        backgroundColor: '#1666DA',
        width: '90%',
        borderRadius: 9,
        borderBottomLeftRadius: 0,
        marginTop: 10,
        padding: 10,
        alignSelf: 'center',
        flexDirection: 'row'

    },
    cardIcon: {
        fontSize: 30,
        color: '#fff',
        marginRight: 34,
        marginTop: 10,
        marginLeft: 5

    },
    totalSavings: {
        color: '#fff',
        fontSize: 15,
    },
    savingsAmount: {
        fontSize: 25,
        color: '#fff',
        marginTop: 5
    },

    image1: {
        marginTop: 27,
        width: 310,
        height: 110,
        alignSelf: 'center',
        borderRadius: 5
    },
    investOp: {
        color: '#fff',
        marginLeft: 20,
        marginTop: 30,
        fontSize: 20,

    },

    listCard: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 20,
        borderColor: '#CFDBE0',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        // padding: 10,
        width: '80%',
        borderRadius: 8,
        borderBottomLeftRadius: 0,
        color: '#fff',
        height: 0.08 * height

    },
    listCardIcon: {
        color: '#fff',
        marginRight: 30,
        marginLeft: 0.07 * width,
        alignSelf: 'center',
        //  padding: 30,
    },
    cardOuter: {
        flexDirection: 'row',
         alignItems: 'center',
        alignSelf: 'center',
      marginLeft: 25,
     flexWrap: 'wrap',
        marginTop: 15,
       // width: '50%'

    },
    listCardWord: {
        color: '#fff',
        alignSelf: 'center',

    },
    quickCard: {
        backgroundColor: '#1C1E21',
        alignSelf: 'center',
        color: '#fff',
        width: 150,
        height: 198,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        padding: 15,
        borderBottomLeftRadius: 0
    },
    quickTitle: {
        color: '#E7439C',
        marginBottom: 10
    },
    quickCardMiddle: {
        width: "95%",
        color: '#fff',
        fontSize: 11,
        fontWeight: '200'
    },
    quickCardFooter: {
        color: '#E7439C',
        marginTop: 15
    },
    quickIcon: {
        // color: '#E7439C',
        fontSize: 24,
        marginBottom: 10
    },
    enable: {
        color: '#fff',
        textTransform: 'capitalize',
        fontSize: 13,
        marginBottom: 24
    },
    secondSection: {
        flexDirection: 'row',
        marginTop: 24,
        marginLeft: 25,
    },
    switch: {
        position: 'absolute',
        right: 10,
        bottom: 10
    },

    loginError: {
        color: 'red',
        marginBottom: 20,
    },

    welcomeLogo: {
        textAlignVertical: 'center',
        marginTop: 50
    },
    welcome: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    chatIcon: {
        backgroundColor: 'blue',
        position: 'absolute',
        bottom: 30,
        right: 20,
        padding: 10,
        borderRadius: 50,
        elevation: 30
    },
    chatContainer: {

    },
    chatButton: {

    },
    chatBottom: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#F0F2F5',
        height: 60,
        flexDirection: 'row'
    },
    chatInput: {
        width: '80%',
        height: 40,
        marginTop: 20,
        alignSelf: 'center'
    },
    modalStyle: {
        height: 1 / 90,
        width: '80%',
        borderRadius: 10

    },
    lightText: {
        color: '#fff'
    },
    DarkText: {
        color: 'black'
    },

    quickSaveH: {
        fontSize: 0.034 * height,
        marginBottom: 0.034 * height,
    },

    quickSaveP: {
        fontSize: 0.024 * height,
        color: '#fff',
        marginBottom: 0.09 * height,
    },
    savePage: {
        marginTop: 0.1 * height,
        paddingLeft: 0.05 * width,
        paddingRight: 0.05 * width
    }

})