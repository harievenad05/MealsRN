import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MealItem from '../components/MealItem';
import {MEALS} from '../data/dummy-data';

const CategoryMealsScreen = ({route, navigation}) => {
  const {categoryId} = route.params;
  const {otherParam} = route.params;

  const renderedItems = ({item}) => {
    return (
      <MealItem
        title={item.title}
        duration={item.duration}
        imageUrl={item.imageUrl}
        complexity={item.complexity}
        affordability={item.affordability}
        mealItemClick={() => {
          navigation.navigate('MealDetail', {
            detailId: item.id,
            title: item.title,
            isFavmeal: true,
          });
        }}
      />
    );
  };

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderedItems}
        style={{width: '100%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
