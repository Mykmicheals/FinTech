import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../Styles/HomeStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';

const ChatScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>ChatScreen</Text>
                <View style={styles.chatBottom}>
                    <Entypo name="attachment" size={24} color="black" />
                    <TextInput
                        style={styles.chatInput}
                    />
                </View>
            </View>
        </SafeAreaView>

    )
}

export default ChatScreen