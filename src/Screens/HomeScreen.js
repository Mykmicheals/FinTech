import { View, FlatList, Image, ScrollView } from 'react-native'
import { Text } from 'react-native-paper';
import React, { useReducer, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../Styles/HomeStyle';
import SmallCard from '../components/SmallCard';
import { useSelector } from 'react-redux';
import BigCard from '../components/BigCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import SafeLockModal from '../components/SafeLockModal';
import ToastManager from 'toastify-react-native'


import Modal from "react-native-modal";
import ModalReducer from '../Reducers/ModalReducer';
import SecurityModal from '../Modals/SecurityModal';
import { cardInfo } from '../components/api';

const HomeScreen = ({ navigation }) => {

    const navig = () => {
        navigation.navigate('invest')
    }



    const [visible, setVisible] = React.useState(false);
    const initialModalState = {
        safeLock: false,
        autoSave: false,
        questions: false,
        redeem: false
    }

    const [modalState, dispatch] = useReducer(ModalReducer, initialModalState)

    const handleModal = () => {
        dispatch({
            type: 'questions',
        })
    }

    const handleClick = () => {
        setVisible(visible => !visible);

    };

    const username = useSelector(state => state.profile.username)
    return (
        <SafeAreaView>
            <View>
                <ToastManager />
                <ScrollView style={styles.container}>
                    <View style={styles.containerTop}>

                        <View>
                            <Text style={styles.userName} >{username.username}</Text>
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
                            icon='autoprefixer'
                            word='Turn on Auto save'
                            isOpen={visible}
                            handleClick={handleClick}
                        />
                        <SafeLockModal
                            visible={visible}
                            handleClick={handleClick}
                        />
                        <SmallCard
                            icon='lock'
                            word='Set your security question now'
                            handleClick={handleModal}
                        />
                        <SmallCard
                            icon='money-bill-alt'
                            word='Save your money now'
                            handleClick={navig}
                        />

                        <SecurityModal
                            visible={modalState.questions}
                            handleClick={handleModal}
                        />

                        <SmallCard
                            icon='forward'
                            word='Redeem your sign in Bonus'
                            handleClick={() => (alert('Try again later'))}
                        />

                    </View>

                    <Text style={styles.investOp}>Best Saver</Text>
                    <Image style={styles.image1} source={require('../../assets/home2.jpg')} />

                    <View style={styles.optionsSection}>
                        <Text style={styles.investOp}>Quick options</Text>
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
                                icon='dollar'
                                body='strict savings automatically. Daily, weekly or Montly, 10% pa'
                                footer='N0.00'
                                color='#E7439C'
                            />

                            <BigCard
                                title='PiggyBank'
                                icon='bluetooth'
                                body='strict savings automatically. Daily, weekly or Montly, 10% pa'
                                footer='N0.00'
                                color='#27AE60'
                            />
                            <BigCard
                                title='Call us'
                                icon='phone'
                                body='strict savings automatically. Daily, weekly or Montly, 10% pa'
                                footer='N0.00'
                                color='#753FF6'
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>

            <SafeLockModal />




        </SafeAreaView>

    )
}

export default HomeScreen