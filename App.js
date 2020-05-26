import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, Platform} from 'react-native';
import 'react-native-gesture-handler';
import MealsTabNavigator from './src/navigation/MealsNavigator';
import Colors from './src/constants/Colors';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={Colors.mainColor}
        barStyle={Platform.OS === 'android' ? 'light-content' : 'default'}
      />
      <MealsTabNavigator />
    </NavigationContainer>
  );
};

export default App;
