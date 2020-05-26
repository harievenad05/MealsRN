import React, {Component} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

const FilterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Filters/ Restrictions</Text>
      <View style={styles.filterContainer}>
        <Text>Gluten-free </Text>
        <Switch value={true} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 20,
  },
});

export default FilterScreen;
