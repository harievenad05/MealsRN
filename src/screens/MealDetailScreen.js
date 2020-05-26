import React from 'react';
import {Button, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {MEALS} from '../data/dummy-data';

const MealDetailScreen = ({route, navigation}) => {
  const {detailId} = route.params;
  const {otherParam} = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === detailId);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      </View>
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity}</Text>
        <Text>{selectedMeal.affordability}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Ingredients:</Text>
        {selectedMeal.ingredients.map((ingredient) => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
        <Text style={styles.title}>Steps:</Text>
        {selectedMeal.steps.map((step) => (
          <Text key={step}>{step}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'auto',
    paddingVertical: 10,
  },
});

export default MealDetailScreen;
