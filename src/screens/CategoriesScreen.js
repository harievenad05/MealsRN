import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const renderGridItem = ({item}) => {
  return (
    <View style={styles.gridItem}>
      <Text>{item.title}</Text>
    </View>
  );
};

const CategoriesScreen = (props) => {
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
