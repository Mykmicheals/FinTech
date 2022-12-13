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
import { Provider } from 'react-redux';
import store from './src/store';
import Welcome from './src/Screens/Welcome';
import SafeLockModal from './src/components/SafeLockModal';
import PayScreen from './src/Screens/PayScreen';


export const APPURL = 'https://userauth.pythonanywhere.com'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator();
const SavingsStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{

        activeBackgroundColor: 'black',
        inactiveBackgroundColor: 'black',
      }}
    >
      <HomeStack.Screen name="home" component={HomeScreen} />
      <HomeStack.Screen name="savings" component={Savings} />
      <HomeStack.Screen name="account" component={AccountScreen} />
      <HomeStack.Screen name="invest" component={InvestScreen} />
      <HomeStack.Screen name="settings" component={SettingsScreen} />
      <HomeStack.Screen name="pay" component={PayScreen} />
    </HomeStack.Navigator>
  );
}




function ButtomTabs() {
  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{

        activeBackgroundColor: 'black',
        inactiveBackgroundColor: 'black',
      }}
    >
      <Tab.Screen
        name='home' component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          tabBarBadge: 2
        }}
      />

      <Tab.Screen
        name='Savings' component={Savings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="rocket" color={color} size={size} />
          ),

        }}
      />
      <Tab.Screen name='Account' component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),

        }}
      />
      {/* <Tab.Screen name='Settings' component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen name='Invest' component={InvestScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
      {/* <BTab.Screen name='Apps' component={Login} /> */}
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>

            <Stack.Screen name='welcome' component={Welcome} />
            <Stack.Screen name='signup' component={SignUp} />
            <Stack.Screen name="modal" component={SafeLockModal} />
            <Stack.Screen name="s" component={ButtomTabs} />
            <Stack.Screen name='login' component={Login} />

          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>

    </Provider>

  );
}

