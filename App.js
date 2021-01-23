import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, Text} from 'react-native';

import Router from './src/navigation/Router';
import feed from './assets/data/feed';
import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';

import Post from './src/components/Post';

const post1 = feed[0];
// import { withAuthenticator } from 'aws-amplify-react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <DestinationSearchScreen />
    </>
  );
};

export default App;
