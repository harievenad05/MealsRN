import React from 'react';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';
import {StyleSheet, View, Text} from 'react-native';

const CategoryMealsScreen = ({route, navigation}) => {
  const {categoryId} = route.params;
  const {otherParam} = route.params;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View style={styles.content}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          Oops... No meals found!!!
        </Text>
      </View>
    );
  }
  return <MealList dataToRender={displayedMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
