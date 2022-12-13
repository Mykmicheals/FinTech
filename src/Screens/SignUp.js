import { Text, View, StyleSheet, Image, } from 'react-native'
import React, { useState } from 'react'
import { TextInput, HelperText, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { profileActions } from '../store/index';
import { SafeAreaView } from 'react-native-safe-area-context';
import ToastManager, { Toast } from 'toastify-react-native'

import { APPURL } from '../../App';

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [firstname, setFistname] = useState('')
    const [loginError, setLoginError] = useState(false)


    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)

    var sentData = {
        email: email,
        password: password,
        first_name: firstname
    }

    const LoginHandler = async (e) => {
        setLoading(true)
        const response = await fetch(`${APPURL}/${showSignUp ? 'signup/' : 'login/'}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(sentData),
        })
        const data = await response.json();


        if (data.message === 'sucess' || data.token) {
            navigation.navigate('s')
            dispatch(profileActions.addname({
                username: data.first_name
            }))

          Toast.success(`Welcome ${data.first_name}`)
        }
      

        else {
            setLoginError(true)
            setPassword('')
        }

        setLoading(false)

    }

    const signUpHandler = () => {
        setShowSignUp(!showSignUp)
    }

    console.log(sentData)

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.rightImage} source={require('../../assets/Subtract.png')} />
            <Image style={styles.leftImage} source={require('../../assets/group.png')} />
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
            <Text style={styles.loginText}>{showSignUp ? 'Signup' : 'Login'}</Text>
            {loginError && <Text style={styles.loginError}>Invalid Username or Password</Text>}


            {showSignUp && <View style={styles.inputView}>
                <TextInput
                    mode="outlined"
                    label="Username"
                    left={<TextInput.Icon name="email" icon={'account'}
                        iconColor="black" />}
                    onChangeText={text=>setFistname(text)}

                />
            </View>}

            {/* {showSignUp && <View style={styles.inputView}>
                <TextInput
                    mode="outlined"
                    label="Phone number"
                    left={<TextInput.Icon name="email" icon={'email-outline'}
                        iconColor="black" />}

                />
            </View>} */}

            <View style={styles.inputView}>
                <TextInput
                    mode="outlined"
                    label="Email"
                    onChangeText={text => setEmail(text)}
                    left={<TextInput.Icon name="email" icon={'email-outline'}
                        iconColor="black" />}

                />

            </View>
            <View style={styles.inputView}>
                <TextInput
                    Outlined
                    label="Password"
                    mode="outlined"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    left={<TextInput.Icon name="email" icon={'account'}
                        iconColor="black" />}
                />
            </View>

            <View style={styles.inputView}>
                {showSignUp && <TextInput
                    Outlined
                    label="Confirm Password"
                    mode="outlined"
                    value={password}
                    secureTextEntry={true}
                    //   onChangeText={text => setPassword(text)}
                    left={<TextInput.Icon name="email" icon={'account'}
                        iconColor="black" />}
                />}
            </View>
            {loading ? <Button style={styles.buttonStyle} loading mode="contained"></Button>
                : <Button onPress={LoginHandler} style={styles.buttonStyle} icon="login" mode="contained">{showSignUp ? 'Signup' : 'Login'} </Button>}


            <View style={styles.loginBottom}>
                {showSignUp ? <Text>Already have an account?  <Text onPress={signUpHandler} style={styles.register}>Login</Text> </Text> : <Text>Don't have an accout? <Text onPress={signUpHandler} style={styles.register}>Register</Text></Text>}
                {!showSignUp && <Text style={styles.forgot} >Forgot Password?</Text>}
            </View>
            <Image style={styles.polygon1} source={require('../../assets/Polygon1.png')} />
            <Image style={styles.polygon2} source={require('../../assets/Polygon1.png')} />
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    loginText: {
        marginBottom: 30,
        marginTop: 90,
        fontWeight: '700',
        fontSize: 20,
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
    },
    loginError: {
        color: 'red',
        marginBottom: 2
    }


})



export default SignUp