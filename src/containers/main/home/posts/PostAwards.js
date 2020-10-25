import React from 'react';
import {FlatList, Image, View} from 'react-native';

const _renderItem = ({index, item}) => (
  <>
    <View
      style={{
        width: 20,
        height: 20,
        marginHorizontal: 5,
        marginVertical: 5,
        flex: 1,
      }}>
      <Image
        source={{
          uri:
            item.resized_static_icons[item.resized_static_icons.length - 3].url,
            cache: 'force-cache'
        }}
        style={{
          height: 20,
        }}
      />
    </View>
  </>
);

const PostAwards = ({item}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <FlatList
        data={item.all_awardings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PostAwards;
