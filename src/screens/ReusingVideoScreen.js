import React from 'react';
import VideoComponent from '../components/VideoComponent';
import { StyleSheet, View, Dimensions } from 'react-native';

const ReusingVideoScreen = () => {
    return (<VideoComponent videoHeight={Dimensions.get('window').width * (9 / 16)} videoWidth={Dimensions.get('window').width} />);
}

export default ReusingVideoScreen;