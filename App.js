import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, Platform} from 'react-native';
import 'react-native-gesture-handler';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import MealsTabNavigator from './src/navigation/MealsNavigator';
import Colors from './src/constants/Colors';
import mealsReducer from './src/store/reducers/meals';
import MealsDrawerNavigator from './src/navigation/MealsNavigator';

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={Colors.mainColor}
        barStyle={Platform.OS === 'android' ? 'light-content' : 'default'}
      />
      <Provider store={store}>
        <MealsDrawerNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
