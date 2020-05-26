import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Platform} from 'react-native';
import HeaderRightBtn from '../components/headerRButton';
import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuBtn from '../components/MenuBtn';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const defaultStackNavOptions = {
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'null',
  },
};

const MealsStackNavigator = (props) => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={({route, navigation}) => ({
          headerLeft: () => (
            <MenuBtn
              menuClick={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="CategoryMeal"
        component={CategoryMealsScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
          headerRight: () => (
            <HeaderRightBtn
              iconName={route.params.isFavmeal ? 'heart' : 'heart-o'}
              menuBtnClickAction={() => console.log('Marked as favorite...')}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const FavStackNavigator = (props) => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="FavoriteMeals"
        component={FavoritesScreen}
        options={({route, navigation}) => ({
          title: 'Favorites',
          headerLeft: () => (
            <MenuBtn
              menuClick={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
          headerRight: () => (
            <HeaderRightBtn
              iconName={route.params.isFavmeal ? 'heart' : 'heart-o'}
              menuBtnClickAction={() => console.log('Marked as favorite...')}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const MealsTabNavigator = (props) => {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: Colors.primaryColor}}>
      <Tab.Screen
        name="Home"
        component={MealsStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Fav"
        component={FavStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="star" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const FilterStackNavigator = (props) => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="FilterMeals"
        component={FiltersScreen}
        options={({route, navigation}) => ({
          title: 'Filter Meals',
          headerLeft: () => (
            <MenuBtn
              menuClick={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const MealsDrawerNavigator = (props) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MealsTab" component={MealsTabNavigator} />
      <Drawer.Screen name="Filter Meals" component={FilterStackNavigator} />
    </Drawer.Navigator>
  );
};

export default MealsDrawerNavigator;
