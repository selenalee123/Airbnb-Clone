import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, Pressable } from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';
import SuggestionRow from './SuggestionRow';
import SearchResultsScreen from '../SearchResults/index.js';
import Entypo from 'react-native-vector-icons/Entypo'

import searchResults from '../../../assets/data/search';

const DestinationSearchScreen = (props) => {
    const [inputText, setInputText] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInputText}
            />
            <FlatList
                data={searchResults}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={'location-pin'} size={25} />
                        </View>
                        <Text>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default DestinationSearchScreen;

// import React, {useState} from "react";
// import { View, TextInput, Text, FlatList, Pressable } from "react-native";
// import styles from './styles.js';
// import {useNavigation} from '@react-navigation/native';
// import SuggestionRow from "./SuggestionRow";

// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// const DestinationSearchScreen = (props) => {

//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <GooglePlacesAutocomplete
//         placeholder='Where are you going?'
//         onPress={(data, details = null) => {
//           // 'details' is provided when fetchDetails = true
//           console.log(data, details);
//           navigation.navigate('Guests', { viewport: details.geometry.viewport });
//         }}
//         fetchDetails
//         styles={{
//           textInput: styles.textInput,
//         }}
//         query={{
//           key: 'AIzaSyDYnkl8rGqpQ9-6XjrH3ssqNSDiJHpULGw',
//           language: 'en',
//           types: '(cities)',
//         }}
//         suppressDefaultStyles
//         renderRow={(item) => <SuggestionRow item={item} />}
//       />
//     </View>
//   );
// };

// export default DestinationSearchScreen;