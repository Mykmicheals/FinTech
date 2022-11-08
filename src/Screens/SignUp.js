import { Text, View, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper';



const SignUp = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)
    const LoginHandler = (e) => {
        setLoading(true)
    }

    const signUpHandler = () => {
        setShowSignUp(!showSignUp)
    }

    return (
        <View style={styles.container}>
            <Image style={styles.rightImage} source={require('../../assets/Subtract.png')} />
            <Image style={styles.leftImage} source={require('../../assets/group.png')} />
            <Text style={styles.loginText}>{showSignUp ? 'Signup' : 'Login'}</Text>

            {showSignUp && <View style={styles.inputView}>
                <TextInput
                    mode="outlined"
                    label="Firstname"
                    left={<TextInput.Icon name="email" icon={'email-outline'}
                        iconColor="black" />}

                />
            </View>}

            {showSignUp && <View style={styles.inputView}>
                <TextInput
                    mode="outlined"
                    label="Username"
                    left={<TextInput.Icon name="email" icon={'account'}
                        iconColor="black" />}

                />
            </View>}

            {showSignUp && <View style={styles.inputView}>
                <TextInput
                    mode="outlined"
                    label="Phone number"
                    left={<TextInput.Icon name="email" icon={'email-outline'}
                        iconColor="black" />}

                />
            </View>}

            <View style={styles.inputView}>
                <TextInput
                    mode="outlined"
                    label="Email"
                    left={<TextInput.Icon name="email" icon={'email-outline'}
                        iconColor="black" />}

                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    Outlined
                    label="Password"
                    mode="outlined"
                    left={<TextInput.Icon name="email" icon={'account'}
                        iconColor="black" />}
                />
            </View>
            {loading ? <Button style={styles.buttonStyle} loading mode="contained"></Button>
                : <Button onPress={LoginHandler} style={styles.buttonStyle} icon="login" mode="contained">{showSignUp ? 'Signup' : 'Login'} </Button>}

            <View style={styles.loginBottom}>
                {showSignUp ? <Text>Already have an account?  <Text onPress={signUpHandler} style={styles.register}>Login</Text> </Text> : <Text>Don't have an accout? <Text onPress={signUpHandler} style={styles.register}>Register</Text></Text>}
                {!showSignUp && <Text style={styles.forgot} >Forgot Password?</Text>}
            </View>
            <Image style={styles.polygon1} source={require('../../assets/Polygon1.png')} />
            <Image style={styles.polygon2} source={require('../../assets/Polygon1.png')} />
        </View>
    )
}



const styles = StyleSheet.create({
    loginText: {
        marginBottom: 30,
        marginTop: 90,
        fontWeight: '700',
        fontSize:20,
    },
    container: {
        backgroundColor: '#fff',
        height: '100%',
        justifyContent: 'center',
        alignItems: "center",
    },
    rightImage: {
        position: 'absolute',
        right: '-20%',
        width: 220,
        height: 220,
        top: 0
    },

    leftImage: {
        position: 'absolute',
        top: '30%',
        left: '-20%',
        width: 170,
        height: 400
    },

    inputView: {
        marginBottom: 20,
        width: '80%',
    },

    buttonStyle: {
        width: '50%',
        marginTop: 23
    },

    loginBottom: {
        paddingTop: 40,
        alignItems: 'center',
    },

    register: {
        color: 'black',
        fontWeight: '700',
        marginBottom: 20
    },

    forgot: {
        marginTop: 20
    },
    polygon1: {
        position: 'absolute',
        width: 300,
        height: 300,
        bottom: -180,
        right: -220,
        zIndex: -3,
      
    },

    polygon2: {
        position: 'absolute',
        width: 300,
        height: 300,
        bottom: -230,
        right: -250,
        zIndex: -3,
    }


})



export default SignUp