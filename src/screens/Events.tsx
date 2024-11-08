// react stuff
import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function Events({ navigation }) {

  return (
    <Container className='flex-1 items-center justify-center background-white'>
      <StyledText className='text-center text-lg font-bold mb-[10px]'>
        TODO
      </StyledText>
    </Container>
  )
}

export function EventsNavigator() {
  return (
    <Stack.Navigator screenOptions={{ orientation: 'portrait' }}>
      <Stack.Screen name='Upcoming Events' component={Events} />
    </Stack.Navigator>
  )
}

const StyledText = styled(Text);
const Container = styled(View)