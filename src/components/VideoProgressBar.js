import React from 'react';
import Slider from '@react-native-community/slider';
import { View, Text, StyleSheet } from 'react-native';

const VideoProgressBar = ({ currentTime, duration, onSlideCapture, onSlideStart, onSlideComplete }) => {
    const getMinutesFromSeconds = (time) => {
        const minutes = time >= 60 ? Math.floor(time / 60) : 0
        const seconds = Math.floor(time - minutes * 60);

        return `${minutes >= 10 ? minutes : '0' + minutes}: ${seconds >= 10 ? seconds : '0' + seconds} `
    }

    return (
        <View style={styles.wrapper}>
            <Slider
                value={currentTime}
                minimumValue={0}
                maximumValue={duration}
                step={1}
                onValueChange={(time) => onSlideCapture(time)}
                onSlidingStart={onSlideStart}
                onSlidingComplete={onSlideComplete}
                minimumTrackTintColor={'#F44336'}
                maximumTrackTintColor={'#FFFFFF'}
                thumbTintColor={'#F44336'}
            />
            <View style={styles.timeWrapper}>
                <Text style={styles.timeLeft}>{getMinutesFromSeconds(currentTime)}</Text>
                <Text style={styles.timeRight}>{getMinutesFromSeconds(duration)}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    timeWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    timeLeft: {
        flex: 1,
        fontSize: 16,
        color: '#FFFFFF',
        paddingLeft: 10,
    },
    timeRight: {
        flex: 1,
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'right',
        paddingRight: 10,
    },
});

export default VideoProgressBar