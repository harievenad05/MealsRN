import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../data/dummy-data';

const MealDetailScreen = ({route, navigation}) => {
  const {detailId} = route.params;
  const {otherParam} = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === detailId);
  return (
    <View style={styles.container}>
      <Text>{selectedMeal.title}</Text>
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
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

export default MealDetailScreen;
