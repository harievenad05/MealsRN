import React, {Component} from 'react';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';

const FavoritesScreen = ({navigation}) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  const mealArr = useSelector((state) => state.meals.filteredMeals);
  console.log(mealArr);
  return <MealList dataToRender={favMeals} navigation={navigation} />;
};

export default FavoritesScreen;
