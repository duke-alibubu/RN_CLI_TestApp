import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PdfScreen from './src/screens/PdfScreen';
import FileViewerScreen from './src/screens/FileViewerScreen';
import VideoScreen from './src/screens/VideoScreen';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName="Video"
      screenOptions={{ title: 'Testing Gesture Handlers' }}>
      <Stack.Screen name="PDF" component={PdfScreen} />
      <Stack.Screen name="FileViewer" component={FileViewerScreen} />
      <Stack.Screen name="Video" component={VideoScreen} />
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