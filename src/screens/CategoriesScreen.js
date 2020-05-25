import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = (props) => {
  const renderGridItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate('CategoryMeal', {categoryId: item.id});
        }}>
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
