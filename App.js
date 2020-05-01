import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux';

import configureStore from './src/store/store'

const store = configureStore();

/* Components */
import SubscriberOverview from './src/dashboard/subscribers/overview/Overview'
import UpdateSubscriber from './src/dashboard/subscribers/updateSubscriber/UpdateSubscriber'
import AddSubscriber from './src/dashboard/subscribers/addSubscriber/AddSubscriber'

/* Environment */
import Header from './src/components/header/Header'
import Footer from './src/components/footer/Footer'

console.disableYellowBox = true;

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header/>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="SubscriberOverview" component={SubscriberOverview} />
          <Stack.Screen name="UpdateSubscriber" component={UpdateSubscriber} />
          <Stack.Screen name="AddSubscriber" component={AddSubscriber} />
        </Stack.Navigator>
        <Footer/>
      </NavigationContainer>       
    </Provider>
  );
}

export default App;