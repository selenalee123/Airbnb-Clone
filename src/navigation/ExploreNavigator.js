import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';
import {ScreenStack} from 'react-native-screens';

const Stack = createStackNavigator();

const ExploreNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}></Stack.Screen>

<Stack.Screen
        name={'SearchResults'}
        component={SearchResultsTabNavigator}
        options={{
          title: 'Search your destination',
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;

