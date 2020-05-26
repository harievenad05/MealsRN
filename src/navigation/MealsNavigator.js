import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {
  Platform,
  View,
  Button,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import HeaderRightBtn from '../components/headerRButton';
import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuBtn from '../components/MenuBtn';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
    // <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.primaryColor,
        // itemStyle: {marginTop: 10},
        labelStyle: {fontSize: 14, fontWeight: 'bold'},
      }}>
      <Drawer.Screen
        name="MealsTab"
        component={MealsTabNavigator}
        options={{
          title: 'Meals',
          drawerIcon: ({focused, size}) => {
            <Icon name="star" size={size} color={focused ? '#7cc' : '#ccc'} />;
          },
        }}
      />
      <Drawer.Screen
        name="FilterMeals"
        component={FilterStackNavigator}
        options={{
          title: 'Filter',
          drawerIcon: ({focused, size}) => {
            <Icon name="star" size={size} color={focused ? '#7cc' : '#ccc'} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawer = ({navigation}) => {
  return (
    <View style={{paddingTop: 100}}>
      <TouchableOpacity onPress={() => navigation.navigate('MealsTab')}>
        <Text style={{fontSize: 18, paddingLeft: 40, paddingBottom: 20}}>
          <Icon size={23} name={'restaurant'}></Icon> Menu 1
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('FilterMeals')}>
        <Text style={{fontSize: 18, paddingLeft: 40}}>
          <Icon size={23} name={'star'}></Icon> Menu 2
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MealsDrawerNavigator;
