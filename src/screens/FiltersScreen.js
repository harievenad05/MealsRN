import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import Colors from '../constants/Colors';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label} </Text>
      <Switch
        trackColor={{true: Colors.primaryColor}}
        value={props.mealState}
        onValueChange={props.onChangeAction}
      />
    </View>
  );
};

const FilterScreen = (props) => {
  const {navigation} = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({save: saveFilters});
  }, [saveFilters]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Filters/ Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        mealState={isGlutenFree}
        onChangeAction={(newValue) => {
          setIsGlutenFree(newValue);
        }}
      />
      <FilterSwitch
        label="Lactose-free"
        mealState={isLactoseFree}
        onChangeAction={(newValue) => {
          setIsLactoseFree(newValue);
        }}
      />
      <FilterSwitch
        label="Vegan"
        mealState={isVegan}
        onChangeAction={(newValue) => {
          setIsVegan(newValue);
        }}
      />
      <FilterSwitch
        label="Vegetarian"
        mealState={isVegetarian}
        onChangeAction={(newValue) => {
          setIsVegetarian(newValue);
        }}
      />
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
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 20,
  },
});

export default FilterScreen;
