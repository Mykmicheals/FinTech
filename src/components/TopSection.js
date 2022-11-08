import { View, Text,Image } from 'react-native'
import React from 'react'
import { styles } from '../Styles/HomeStyle';

const TopSection = ({ title, paragraph }) => {
    return (
        <View style={styles.containerTop}>

            <View>
                <Text style={styles.userName} >{title}</Text>
                <Text style={styles.invest}>{paragraph}</Text>
            </View>
            <Image style={styles.profileImage} source={require('../../assets/passport.jpeg')} />
        </View>
    )
}

export default TopSection