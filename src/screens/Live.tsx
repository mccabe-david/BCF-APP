// react imports
import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { styled } from 'nativewind';
// component imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// util function imports
// import { getValueFromKey, saveObjectToStorage } from '../utils/StorageUtil';


const Stack = createNativeStackNavigator();


export function Live({ navigation }) {

  return <Wrapper>
    <StyledText className=''>
      TODO
    </StyledText>
  </Wrapper>

}

export function LiveNavigator() {
  return (
    <Stack.Navigator screenOptions={{ orientation: 'portrait' }}>
      <Stack.Screen name='LiveScreen' component={Live} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const Wrapper = ({ children }) => {
  return (
    <StyledSafe className='flex-1 items-center bg-white'>
      {children}
    </StyledSafe>
  )
};

const Container = ({ children }) => {
  return (
    <StyledView className='bg-white justify-center flex-1 items-center'>{children}</StyledView>
  )
};

// nativewind stylable components
const Content = styled(ScrollView);
const StyledSafe = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);