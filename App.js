import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PdfScreen from './src/screens/PdfScreen';
import FileViewerScreen from './src/screens/FileViewerScreen';
import VideoScreen from './src/screens/VideoScreen';
import VideoPlayerScreen from './src/screens/VideoPlayerScreen';
import TestVideoScreen from './src/screens/TestVideoScreen';
import ReusingVideoScreen from './src/screens/ReusingVideoScreen';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName="ReuseVideoScreen"
      screenOptions={{ title: 'Testing Gesture Handlers' }}>
      <Stack.Screen name="PDF" component={PdfScreen} />
      <Stack.Screen name="FileViewer" component={FileViewerScreen} />
      <Stack.Screen name="Video" component={VideoScreen} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
      <Stack.Screen name="TestVideo" component={TestVideoScreen} />
      <Stack.Screen name="ReuseVideoScreen" component={ReusingVideoScreen} />
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