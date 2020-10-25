import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeNavigator from './home/HomeNavigator';
import ComunitiesNavigator from './comunities/ComunitiesNavigator';
import AddPostNavigator from './addPost/AddPostNavigator';
import ChatNavigator from './chat/ChatNavigator';
import InboxNavigator from './inbox/InboxNavigator';
import {BlurView} from '@react-native-community/blur';

import images from 'res/images';

const TabNavigator = ({navigation}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        showIcon: true,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? images.home_selected : images.home;
          } else if (route.name === 'Comunities') {
            iconName = focused ? images.comunities_selected : images.comunities;
          } else if (route.name === 'AddPost') {
            iconName = focused ? images.addPost_selected : images.addPost;
          } else if (route.name === 'Chat') {
            iconName = focused ? images.chat_selected : images.chat;
          } else if (route.name === 'Inbox') {
            iconName = focused ? images.inbox_selected : images.inbox;
          }

          return <Image style={Styles.image} source={iconName} />;
        },
      })}>
      <Tab.Screen name="Home" navigation={navigation} component={HomeNavigator} />
      <Tab.Screen name="Comunities" component={ComunitiesNavigator} />
      <Tab.Screen name="AddPost" component={AddPostNavigator} />
      <Tab.Screen name="Chat" component={ChatNavigator} />
      <Tab.Screen name="Inbox" component={InboxNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const Styles = StyleSheet.create({
  image: {width: 25, height: 25, resizeMode: 'contain'},
});
