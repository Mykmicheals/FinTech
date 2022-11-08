import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SignUp from './SignUp'
import TopSection from '../components/TopSection'
import { styles } from '../Styles/HomeStyle';
import { ToggleButton, Switch } from 'react-native-paper';
import { accounts } from '../components/api';
import SmallCard from '../components/SmallCard';



const AccountScreen = () => {
    const [fingerOn, setFingerOn] = useState(false)
    const [dashboard, setDashboard] = useState(false)
    const [dark, setDark] = useState(false)
    return (
        <ScrollView style={styles.container}>

            <TopSection
                title='My Account'
                paragraph='Joseph Ugwu'
            />
            <Image style={styles.image1} source={require('../../assets/account.png')} />
            <View style={styles.secondSection}>
                <Text style={styles.enable}>Enable Finger print/faceId</Text>
                <Switch style={styles.switch} value={fingerOn} onValueChange={() => {
                    setFingerOn(!fingerOn)
                }}

                ></Switch>
            </View>

            <View style={styles.secondSection}>
                <Text style={styles.enable}>Show Dashboard account ballances</Text>
                <Switch style={styles.switch} value={dashboard} onValueChange={() => {
                    setDashboard(!dashboard)

                }}

                ></Switch>
            </View>

            <View style={styles.secondSection}>
                <Text style={styles.enable}>Enable dark mode</Text>
                <Switch style={styles.switch} value={dark} onValueChange={() => {
                    setDark(!dark)

                }}

                ></Switch>
            </View>

            {accounts.map((each) => {
              return <SmallCard
                  icon={each.icon}
                  word = {each.word}
              />  
            })}

        </ScrollView>
    )
}

export default AccountScreen