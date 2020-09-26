import React from 'react';
import VideoComponent from '../components/VideoComponent';
import { StyleSheet, View, Dimensions } from 'react-native';

const ReusingVideoScreen = () => {
    return (
        <View style={styles.container}>
            <VideoComponent videoHeight={Dimensions.get('window').width * (9 / 16)} videoWidth={Dimensions.get('window').width} />
            {/* <VideoComponent videoHeight={Dimensions.get('window').width * (9 / 16)} videoWidth={Dimensions.get('window').width} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebeb'
    }
});

export default ReusingVideoScreen;