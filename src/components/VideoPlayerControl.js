import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
// import { VideoPause, VideoPlay } from '../../assets/video_icons';

const VideoPlayerControl = ({ isPlaying, onPlay, onPause }) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity
                style={styles.touchable}
                onPress={isPlaying ? onPause : onPlay}>
                <Text>{isPlaying ? "Pause" : "Play"}</Text>
                {/* {isPlaying ? <VideoPause /> : <VideoPlay />} */}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 3,
    },
    touchable: {
        padding: 5,
    },
    touchableDisabled: {
        opacity: 0.3,
    },
});
export default VideoPlayerControl;