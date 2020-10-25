import React from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import InboxScreen from './InboxScreen';

const InboxNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Inbox" component={InboxScreen} />
    </Stack.Navigator>
  );
};

export default InboxNavigator;
