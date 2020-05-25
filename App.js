import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import MealsNavigator from './src/navigation/MealsNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MealsNavigator />
    </NavigationContainer>
  );
};

export default App;
