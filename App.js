// import './src/ignoreWarning'
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import HomeScreen from './src/Screens/HomeScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './src/Screens/AccountScreen';
import SettingsScreen from './src/Screens/SettingsScreen';
import InvestScreen from './src/Screens/InvestScreen';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Savings from './src/Screens/Savings';



const Stack = createNativeStackNavigator();
const BTab = createBottomTabNavigator()


function ButtomTabs() {
  return (
    <BTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{

        activeBackgroundColor: 'black',
        inactiveBackgroundColor: 'black',
      }}
    >
      <BTab.Screen
        name='Home' component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          tabBarBadge: 3
        }}
      />

      <BTab.Screen
        name='Savings' component={Savings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera" color={color} size={size} />
          ),

        }}
      />
      <BTab.Screen name='Account' component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),

        }}
      />
      <BTab.Screen name='Settings' component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
      <BTab.Screen name='Invest' component={InvestScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
      {/* <BTab.Screen name='Apps' component={Login} /> */}
    </BTab.Navigator>
  )
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name='signup' component={SignUp} />
          <Stack.Screen name="s" component={ButtomTabs} />
          {/* <Stack.Screen name='signup' component={SignUp} /> */}
          <Stack.Screen name='login' component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

