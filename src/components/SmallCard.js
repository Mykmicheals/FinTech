import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, Button, } from 'react-native-paper';
import { styles } from '../Styles/HomeStyle';
import { FontAwesome5 } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';
function SmallCard({ icon, word, handleClick, pressFunc }) {



    return (
        <TouchableOpacity onPress={handleClick} style={styles.listCard}>
            {/* <Icon style={styles.listCardIcon} name={icon} /> */}
            <FontAwesome5 style={styles.listCardIcon} name={icon} />
            <Text style={styles.listCardWord}>{word}</Text>
        </TouchableOpacity>
    )
}

export default SmallCard