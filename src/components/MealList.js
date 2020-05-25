import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import MealItem from './MealItem';

const MealList = (props) => {
  const renderedItems = ({item}) => {
    return (
      <MealItem
        title={item.title}
        duration={item.duration}
        imageUrl={item.imageUrl}
        complexity={item.complexity}
        affordability={item.affordability}
        mealItemClick={() => {
          props.navigation.navigate('MealDetail', {
            detailId: item.id,
            title: item.title,
            isFavmeal: true,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.dataToRender}
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

export default MealList;
