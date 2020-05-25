import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MealsNavigator from './src/navigation/MealsNavigator';

const App = () => {
  return (
    <NavigationContainer >
      <MealsNavigator />
    </NavigationContainer>
  );
};


export default App;
