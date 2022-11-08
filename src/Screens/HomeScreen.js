import { View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Modal as Modals, Portal, Text, Button, Provider } from 'react-native-paper';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../Styles/HomeStyle';
import SmallCard from '../components/SmallCard';


const HomeScreen = () => {

    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);


    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerTop}>

                <View>
                    <Text style={styles.userName} >Micheal</Text>
                    <Text style={styles.invest}>Invest with us to make things easy</Text>
                </View>
                <Image style={styles.profileImage} source={require('../../assets/passport.jpeg')} />
            </View>


            <View style={styles.savingsCard}>
                <Icon style={styles.cardIcon} name='dollar' />
                <View>
                    <Text style={styles.totalSavings} >Total Savings</Text>
                    <Text style={styles.savingsAmount}>N5,000</Text>
                </View>
            </View>
            <Text style={styles.investOp}>Inverstment Opportunities</Text>
            <Image style={styles.image1} source={require('../../assets/home1.jpg')} />
            <View style={styles.listSection}>
                <Text style={styles.investOp}>Todo-List</Text>
                <SmallCard
                    icon='setting'
                    word='safe lock N100,000 for 10 weeks'
                />

                <SmallCard
                    icon='settings'
                    word='safe lock N100,000 for 10 weeks'
                />
                <SmallCard
                    icon='settings'
                    word='safe lock N100,000 for 10 weeks'
                />
                <SmallCard
                    icon='settings'
                    word='safe lock N100,000 for 10 weeks'
                />

                <SmallCard
                    icon='settings'
                    word='safe lock N100,000 for 10 weeks'
                />
            </View>

            <Text style={styles.investOp}>Best Saver</Text>
            <Image style={styles.image1} source={require('../../assets/home2.jpg')} />

            <View style={styles.optionsSection}>
                <Text style={styles.investOp}>Quick options</Text>
                <View style={styles.cardOuter}>
                    <View style={styles.quickCard}>
                        <Icon name='dollar' />
                        <Text>My W.A.E.C Result</Text>
                        <Text style={styles.quickCardMiddle}>Check your Waec results for free</Text>
                        <Text>View Results</Text>
                    </View>

                    <View style={styles.quickCard}>
                        <Icon name='dollar' />
                        <Text>My W.A.E.C Result</Text>
                        <Text style={styles.quickCardMiddle}>Check your Waec results for free</Text>
                        <Text>View Results</Text>
                    </View>

                    <View style={styles.quickCard}>
                        <Icon name='dollar' />
                        <Text>My W.A.E.C Result</Text>
                        <Text style={styles.quickCardMiddle}>Check your Waec results for free</Text>
                        <Text>View Results</Text>
                    </View>

                    <View style={styles.quickCard}>
                        <Icon name='dollar' />
                        <Text>My W.A.E.C Result</Text>
                        <Text style={styles.quickCardMiddle}>Check your Waec results for free</Text>
                        <Text>View Results</Text>
                    </View>

                    <View style={styles.quickCard}>
                        <Icon name='dollar' />
                        <Text>My W.A.E.C Result</Text>
                        <Text style={styles.quickCardMiddle}>Check your Waec results for free</Text>
                        <Text>View Results</Text>
                    </View>

                    <View style={styles.quickCard}>
                        <Icon name='dollar' />
                        <Text>My W.A.E.C Result</Text>
                        <Text style={styles.quickCardMiddle}>Check your Waec results for free</Text>
                        <Text>View Results</Text>
                    </View>


                </View>
            </View>


        </ScrollView>
    )
}

export default HomeScreen