import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

/* Components */
import SubscriberOverview from './src/dashboard/subscribers/overview/Overview'
import NewSubscriber from './src/dashboard/subscribers/newSubscriber/NewSubscriber'
import Header from './src/components/header/Header'
import Footer from './src/components/footer/Footer'

console.disableYellowBox = true;

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Header/>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SubscriberOverview" component={SubscriberOverview} />
        <Stack.Screen name="NewSubscriber" component={NewSubscriber} />
      </Stack.Navigator>
      <Footer/>
    </NavigationContainer>      
  );
}

export default App;