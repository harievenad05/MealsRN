import React, {Component} from 'react';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';
import {View, Text, StyleSheet} from 'react-native';

const FavoritesScreen = ({navigation}) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          Oops... No fav meals found!!!
        </Text>
      </View>
    );
  }
  return <MealList dataToRender={favMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
