import React from 'react';
import MealItem from '../components/MealItem';
import {MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = ({route, navigation}) => {
  const {categoryId} = route.params;
  const {otherParam} = route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  return <MealList dataToRender={displayedMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;
