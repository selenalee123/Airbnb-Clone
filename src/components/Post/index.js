import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const Post = (props) => {
  const post = props.post;
  const width = useWindowDimensions().width;

  return (
    <View style={(styles.container)}>
      <Image style={styles.image} source={{uri: post.image}}></Image>
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      {/*  Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.price}> ${post.newPrice}</Text>
      </Text>
    </View>
  );
};

export default Post;

