import { View, Text, Image, Animated } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../Styles/HomeStyle';
import * as Animatable from 'react-native-animatable';

const Welcome = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('signup')
        }, 2000)
    }, [])
    return (
        <View style={styles.welcome}>
            <Animatable.View animation="zoomInDown">
                <Image style={styles.welcomeLogo} source={require('../../assets/logo.png')} />
                <Animatable.Text
                    animation='flipInY'
                // delay='1000' 
                ></Animatable.Text>

            </Animatable.View>

        </View>
    )
}

export default Welcome