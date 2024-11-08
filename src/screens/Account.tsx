// react imports
import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

interface Props {
  navigation: NavigationProp<ParamListBase>
}

function Account({ navigation }: Props) {

  return <Container className='flex-1 bg-white items-center'>
    <StyledText className='position absolute top-[95%] self-center text-slate-600'>© 2024 Bolyston Chess Federation. All rights reserved. </StyledText>
  </Container>
}

export function AccountNavigator() {
  return (
    <Stack.Navigator screenOptions={{ orientation: 'portrait' }}>
      <Stack.Screen name='Account' component={Account} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const Container = styled(View);
const StyledText = styled(Text);
