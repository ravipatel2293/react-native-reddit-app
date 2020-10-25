import React from 'react';
import {TextInput, View, Image, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import images from 'res/images';
import colors from 'res/colors';

const searchBoxWidth = Dimensions.get('screen').width - 110;

const HomeHeaderSearch = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <Image source={images.searchIcon} style={Styles.searchImage} />
      <TextInput placeholder="Search" style={Styles.TextInput} />
    </SafeAreaView>
  );
};

export default HomeHeaderSearch;

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: searchBoxWidth,
    height: 35,
    backgroundColor: colors.homeScreen.homeSearchInput,
    borderRadius: 5,
  },
  searchImage: {width: 20, height: 20, marginStart: 20},
  TextInput: {
    height: 40,
    width: searchBoxWidth - 40,
    marginStart: 10,
    fontSize: 17,
  },
});
