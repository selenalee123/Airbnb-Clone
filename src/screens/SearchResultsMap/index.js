import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, useWindowDimensions, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';
import places from '../../../assets/data/feed';

// import { API, graphqlOperation } from 'aws-amplify';
// import { listPosts } from '../../graphql/queries';

const SearchResultsMaps = (props) => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const width = useWindowDimensions().width;
  const {posts} = props;
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});

  // click item on flatlist show the item on map
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  const flatlist = useRef();
  const map = useRef();

  // click item on map show the item on flatlist
  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = places.findIndex((place) => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({index});

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };

    map.current.animateToRegion(region);
  }, [selectedPlaceId]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={map}
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 43.0896,
          longitude: -79.0849,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {/* customize the places in the map */}
        {places.map((place) => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatlist}
          data={places}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          showsHorizontalScrollIndicator={true}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          horizontal
          onViewableItemsChanged={onViewChanged.current}></FlatList>
      </View>
    </View>
  );
};

export default SearchResultsMaps;
