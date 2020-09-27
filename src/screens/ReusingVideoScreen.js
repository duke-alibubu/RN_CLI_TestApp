import React from 'react';
import VideoComponent from '../components/VideoComponent';
import { StyleSheet, View, Dimensions } from 'react-native';

const ReusingVideoScreen = () => {
    return (
        <View style={styles.container}>
            <VideoComponent
                uri='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
                videoHeight={Dimensions.get('window').width * (9 / 16)}
                videoWidth={Dimensions.get('window').width} />
            {/* <VideoComponent
                uri='https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4'
                videoHeight={Dimensions.get('window').width * (9 / 16)}
                videoWidth={Dimensions.get('window').width} />
            <VideoComponent
                uri='http://techslides.com/demos/sample-videos/small.mp4'
                videoHeight={Dimensions.get('window').width * (9 / 16)}
                videoWidth={Dimensions.get('window').width} /> */}
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