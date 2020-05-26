import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import MealsTabNavigator from './src/navigation/MealsNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MealsTabNavigator />
    </NavigationContainer>
  );
};

export default App;
