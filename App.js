import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import MealsFavTabNavigator from './src/navigation/MealsNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MealsFavTabNavigator />
    </NavigationContainer>
  );
};

export default App;
