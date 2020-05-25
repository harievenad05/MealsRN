import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoryMealsScreen = ({route, navigation}) => {
  const {categoryId} = route.params;
  const {otherParam} = route.params;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  return (
    <View style={styles.container}>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to MealDetail"
        onPress={() => navigation.navigate('MealDetail')}
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
