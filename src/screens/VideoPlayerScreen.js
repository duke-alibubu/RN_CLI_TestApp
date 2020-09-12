import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Picker,
    ToastAndroid,
    ProgressBarAndroid,
    Dimensions
} from 'react-native';

import VideoPlayer from 'react-native-video-controls';

const VideoPlayerScreen = () => {
    return (
        <VideoPlayer
            style={styles.video}
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    video: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'black',
    }
});
export default VideoPlayerScreen;