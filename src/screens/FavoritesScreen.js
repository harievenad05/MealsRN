import React, {Component} from 'react';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';

const FavoritesScreen = ({navigation}) => {
  const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');
  return <MealList dataToRender={favMeals} navigation={navigation} />;
};

export default FavoritesScreen;
