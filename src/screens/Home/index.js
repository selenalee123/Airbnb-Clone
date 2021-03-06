import React from 'react';
import { View, ImageBackground, Text, Pressable } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>

        <Text style={styles.title}>Explorer</Text>

        <Pressable
          onPress={() => navigation.navigate('Destination Search')}
          style={styles.searchButton}>
          <Fontisto name="search" size={25} color={'#f15454'} />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Find a place</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
