import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const CategoryMealsScreen = ({route, navigation}) => {
  const {categoryId} = route.params;
  const {otherParam} = route.params;
  return (
    <View style={styles.container}>
      <Text>{categoryId}</Text>
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
