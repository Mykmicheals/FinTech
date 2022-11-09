import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../Styles/HomeStyle';

const BigCard = ({ title, icon, body, footer, color }) => {
    const colorStyle = StyleSheet.create({
        allColor: {
            color: color
        }
    })
    return (
        <View style={styles.quickCard}>
            <Icon style={[styles.quickIcon, colorStyle.allColor]} name={icon} />
            <Text style={[styles.quickTitle, colorStyle.allColor]}>{title}</Text>
            <Text style={styles.quickCardMiddle}>{body}</Text>
            <Text style={[styles.quickCardFooter, colorStyle.allColor]}>{footer}</Text>
        </View>
    )
}

export default BigCard