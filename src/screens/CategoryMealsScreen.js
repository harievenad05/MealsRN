import React from 'react';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';

const CategoryMealsScreen = ({route, navigation}) => {
  const {categoryId} = route.params;
  const {otherParam} = route.params;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  return <MealList dataToRender={displayedMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;
