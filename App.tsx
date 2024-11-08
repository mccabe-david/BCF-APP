// react stuff
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { styled } from 'nativewind';
import { Icon } from 'react-native-elements';
// screen imports
import {
  AccountNavigator,
  EventsNavigator,
  LiveNavigator,
} from './src/screens'


const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar barStyle='dark-content' backgroundColor='transparent' />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'LiveNavigator') {
                iconName = focused
                  ? 'crown-circle'
                  : 'crown-circle-outline';
              } else if (route.name === 'AccountNavigator') {
                iconName = focused
                  ? 'account-cowboy-hat'
                  : 'account-cowboy-hat-outline';
              } else if (route.name === 'EventsNavigator') {
                iconName = focused
                  ? 'trophy'
                  : 'trophy-outline';
              }

              return <StyledIcon name={iconName} size={size} color={color} type='material-community' />
            },
            tabBarActiveTintColor: '#900',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name='EventsNavigator' component={EventsNavigator} options={{ headerShown: false, tabBarLabel: 'Events' }} />
          <Tab.Screen name='LiveNavigator' component={LiveNavigator} options={{ headerShown: false, headerStyle: { backgroundColor: '#fff' }, tabBarLabel: 'Live' }} />
          <Tab.Screen name='AccountNavigator' component={AccountNavigator} options={{ headerShown: false, tabBarLabel: 'Account' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const StyledIcon = styled(Icon)

export default App;
