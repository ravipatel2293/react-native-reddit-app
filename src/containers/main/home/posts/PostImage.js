import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ProgressViewIOSBase,
  Text,
  Animated,
} from 'react-native';
import Image from 'react-native-image-progress';
import {PinchGestureHandler, State} from 'react-native-gesture-handler';
import {BlurView} from '@react-native-community/blur';

const PostImage = ({item}) => {
  const scale = new Animated.Value(1);

  const onZoomEvent = Animated.event(
    [
      {
        nativeEvent: {scale: scale},
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  const onZoomStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  const PREWIEV_RESOLUTIONS = item.preview.images[0].resolutions;

  const IMAGE_HEIGHT =
    (Dimensions.get('screen').width /
      PREWIEV_RESOLUTIONS[PREWIEV_RESOLUTIONS.length - 1].width) *
    PREWIEV_RESOLUTIONS[PREWIEV_RESOLUTIONS.length - 1].height;

  const IMAGE_WIDTH = Dimensions.get('screen').width;

  return item.url.includes('gif') ? (
    //<PostVideo item={item} />
    <View></View>
  ) : (
    <View
      style={{
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
        justifyContent: 'center',
      }}>
      <PinchGestureHandler
        onGestureEvent={onZoomEvent}
        onHandlerStateChange={onZoomStateChange}>
        <Animated.Image
          source={{
            uri: PREWIEV_RESOLUTIONS[PREWIEV_RESOLUTIONS.length - 1].url,
            cache: 'force-cache'
          }}
          indicator={ProgressViewIOSBase}
          style={{flex: 1, resizeMode: 'contain', transform: [{scale: scale}]}}
          resizeMode={'contain'}
        />
      </PinchGestureHandler>
      {item.over_18 ? (
        <>
          <BlurView
            style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
            blurType="light"
            blurAmount={50}
            reducedTransparencyFallbackColor="white"
          />
          <Text
            style={{
              position: 'absolute',
              alignSelf: 'center',
              fontWeight: '600',
              fontSize: 40,
              color: '#f5f3f0',
              fontFamily: 'Times New Roman',
            }}>
            NSFW
          </Text>
        </>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default PostImage;

const Styles = StyleSheet.create({});
