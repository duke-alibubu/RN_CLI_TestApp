import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { VideoPause, VideoPlay, VideoReplay } from '../../assets/video_icons';
import { PLAYER_STATES } from 'react-native-media-controls';

const VideoPlayerControl = ({ playerState, onPlay, onPause }) => {
    const selectIcon = () => {
        switch (playerState) {
            case PLAYER_STATES.PAUSED:
                return <VideoPlay />;
            case PLAYER_STATES.PLAYING:
                return <VideoPause />;
            case PLAYER_STATES.ENDED:
                return <VideoReplay />;
            default:
                return <Text> STATE ERROR! </Text>
        }
    }
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity
                style={styles.touchable}
                onPress={playerState === PLAYER_STATES.PLAYING ? onPause : onPlay}>
                {/* <Text>{isPlaying ? "Pause" : "Play"}</Text> */}
                {selectIcon()}
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