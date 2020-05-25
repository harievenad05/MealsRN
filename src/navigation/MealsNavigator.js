import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const Stack = createStackNavigator();

const MealsNavigator = (props) => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="CategoryMeal" component={CategoryMealsScreen} options={{
          headerBackTitleVisible: false
        }} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen}options={{
          headerBackTitleVisible: false
        }} />
      </Stack.Navigator>
    )
}

export default MealsNavigator;
