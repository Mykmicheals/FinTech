import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, Button } from 'react-native-paper';
import { styles } from '../Styles/HomeStyle';
function SmallCard({ icon, word,func,navigation }) {
    return (
        <Button onPress={()=>navigation.navigate(func)} style={styles.listCard}>
            <Icon style={styles.listCardIcon} name={icon} />
            <Text style={styles.listCardWord}>{word}</Text>
        </Button>
    )
}

export default SmallCard