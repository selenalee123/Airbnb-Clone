import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, Pressable } from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';
import SuggestionRow from './SuggestionRow';
import SearchResultsScreen from '../SearchResults/index.js';
import Entypo from 'react-native-vector-icons/Entypo';

import searchResults from '../../../assets/data/search';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationSearchScreen = (props) => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <View style={{ height: 300 }}>
        <GooglePlacesAutocomplete
          placeholder='Where are you going'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            navigation.navigate('Guests');
          }}
          style={{ textInput: styles.textInput }}
          query={{
            key: 'AIzaSyDXAcwo-LlM_HdyLOtWqQylXMcWInuVvw4',
            language: 'en',
            types: '(cities)',
          }}
          suppressDefaultStyles
          renderRow={(item) => <SuggestionRow item={item} />}
        />
      </View>
      {/* <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('Guests')}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={25} />
            </View>
            <Text>{item.description}</Text>
          </Pressable>
        )}
      /> */}
    </View>
  );
};

export default DestinationSearchScreen;
