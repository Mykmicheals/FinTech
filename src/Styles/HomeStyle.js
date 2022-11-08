import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
        color: '#fff',
        zIndex:10
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
        marginTop: 20,
        color: '#fff'
    },
    containerTop: {
        flexDirection: 'row',
        marginTop: 40,
    },
    profileImage: {
        marginLeft: 60,
        marginTop: 20,
        height: 60,
        width: 60,
        borderRadius: 50,
        position: 'absolute',
        right:42
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
        padding: 10,
        width: '80%',
        borderRadius: 8,
        borderBottomLeftRadius: 0,

    },
    listCardIcon: {
        color: '#fff',
        marginRight: 30,
        padding: 30,
    },
    cardOuter: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: 5,
        //flex: 2,
        flexWrap: 'wrap'

    },
    listCardWord: {
        color: '#fff',
        marginLeft: 200,

    },
    quickCard: {
        backgroundColor: '#D3D3D3',
        alignSelf: 'center',
        color:'#fff',
        width: 150,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderBottomLeftRadius: 0
    },
    quickCardMiddle: {
        width: "70%"
    },
    enable: {
        color: '#fff',
        textTransform: 'capitalize',
        fontSize: 13,
        marginBottom:24
    },
    secondSection:{
        flexDirection: 'row',
        marginTop: 24,
        marginLeft:25,
    },
    switch: {
        position: 'absolute',
        right: 10,
        bottom:10
    }
})