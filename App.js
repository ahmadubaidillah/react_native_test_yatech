// In App.js in a new project

import * as React from 'react';
// import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Hello from './src/components/home';
import Detail from './src/components/detail';
import CountApp from './src/components/countApp';
import Lifecycle from './src/components/componentTest';
import ApiExample from './src/components/dataApi';

const Stack = createNativeStackNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Beranda" component={Hello} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="CountApp" component={CountApp} />
        <Stack.Screen name="Lifecycle" component={Lifecycle} />
        <Stack.Screen name="ApiExample" component={ApiExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
