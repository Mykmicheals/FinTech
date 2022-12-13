import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import TopSection from '../components/TopSection'
import { styles } from '../Styles/HomeStyle';
import BigCard from '../components/BigCard';

const Savings = () => {
    return (
        <ScrollView style={styles.container}>
            <TopSection
                title='Savings'
                paragraph='N76,000'
            />

            <Image style={styles.image1} source={require('../../assets/savingsImage.png')} />
            <View style={styles.cardOuter}>
                <BigCard
                    title='PiggyBank'
                    icon='user'
                    body='strict savings automatically. Daily, weekly or Montly, 10% pa'
                    footer='N0.00'
                    color='#136BDC'
                />
                <BigCard
                    title='PiggyBank'
                    icon='user'
                    body='strict savings automatically. Daily, weekly or Montly, 10% pa'
                    footer='N0.00'
                    color='#E7439C'
                />

                <BigCard
                    title='PiggyBank'
                    icon='user'
                    body='strict savings automatically. Daily, weekly or Montly, 10% pa'
                    footer='N0.00'
                    color='#27AE60'
                />
                <BigCard
                    title='PiggyBank'
                    icon='user'
                    body='strict savings automatically. Daily, weekly or Montly, 10% pa'
                    footer='N0.00'
                    color='#753FF6'
                />

                <BigCard
                    title='PiggyBank'
                    icon='user'
                    body='strict savings automatically. Daily, weekly or Montly, 10% pa'
                    footer='N0.00'
                    color='#2295F2'
                />
                <BigCard
                    title='PiggyBank'
                    icon='user'
                    body='strict savings automatically. Daily, weekly or Montly, 10% pa'
                    footer='N0.00'
                    color='#fff'
                />

            
            </View>


        </ScrollView>
    )
}

export default Savings