import { Dimensions, View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../Styles/HomeStyle';
import { mStyles } from '../Styles/ModalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';

import SelectDropdown from 'react-native-select-dropdown'




const InvestScreen = ({ navigation }) => {
    const [amount, setAmount] = useState('')
    const accounts = ["UifryMode", "Dollar Account", "Savings"]
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <View style={styles.savePage}>
                    <Text style={[styles.lightText, styles.quickSaveH]}>Quick Save</Text>
                    <Text style={styles.quickSaveP}>Enter an amount and a destination to save</Text>
                    <View>
                        <Text style={mStyles.formLabel}>Tap here and enter</Text>
                        <TextInput
                            onChangeText={(e) => setAmount(e)}
                            keyboardType='numeric'
                            placeholder='Tap here and enter ... (e.g 5000)'
                            placeholderTextColor="#000"
                            style={mStyles.securityForm} />

                        <Text style={mStyles.formLabel}>Choose a destination</Text>
                        <SelectDropdown
                            data={accounts}

                            buttonStyle={mStyles.securityForm}
                            buttonTextStyle={mStyles.formPicker}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}

                        />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('pay', {
                        amount: { amount }
                    })} style={mStyles.autoSaveBut} title="Save Status">
                        <Text style={mStyles.btnTxt}>Proceed</Text>
                    </TouchableOpacity>
                
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default InvestScreen