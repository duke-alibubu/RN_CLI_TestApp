import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PdfScreen from './src/screens/PdfScreen';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName="PDF"
      screenOptions={{ title: 'Testing Gesture Handlers' }}>
      <Stack.Screen name="PDF" component={PdfScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}