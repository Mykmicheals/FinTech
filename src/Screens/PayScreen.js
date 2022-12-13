import { View, Text } from 'react-native'
import React from 'react'
import { Paystack } from 'react-native-paystack-webview';

const PayScreen = ({ navigation, route }) => {

    const { amount } = route.params
    return (
        <View style={{ flex: 1 }}>
            <Paystack
                paystackKey="pk_test_dd72b6820442e9ed1ecfd39205ef69cd773adcca"
                amount={amount.amount}

                billingEmail="paystackwebview@something.com"
                activityIndicatorColor="green"
                onCancel={(e) => {
                    navigation.navigate('home')
                    // handle response here
                }}
                onSuccess={(res) => {
                    navigation.navigate('home')
                    alert('payment successful')
                    // handle response here
                }}
                autoStart={true}
            />
            {console.log(amount.amount)}
        </View>
    )
}

export default PayScreen