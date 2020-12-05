import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
import { SoundPause, SoundPlay } from '../../../assets/sound_icons';
import Slider from '@react-native-community/slider';
import VideoProgressBar from '../VideoProgressBar';

const SoundComponentWithControl = ({ text, fontSize, uri }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrenTime] = useState(0);

    const soundRef = useRef(new Sound(uri, '', (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            Alert.alert('Notice', 'audio file error. (Error code : 1)');
            this.setState({ playState: 'paused' });
        }
        else {
            setDuration(soundRef.current.getDuration());
        }
    }));

    const onSliderEditing = value => {
        if (soundRef.current) {
            soundRef.current.setCurrentTime(value);
            setCurrenTime(value);
        }
    }

    const playOrPauseSound = () => {
        if (isPlaying) {
            soundRef.current.pause();
        }
        else {
            soundRef.current.play(onFinish);
        }
        setIsPlaying(!isPlaying);
    };

    const onFinish = (success) => {
        if (success) {
            console.log('successfully finished playing');
        } else {
            console.log('playback failed due to audio decoding errors');
            Alert.alert('Notice', 'audio file error. (Error code : 2)');
        }
        setIsPlaying(false);
        setDuration(0);
    }

    const getMinutesFromSeconds = (time) => {
        const minutes = time >= 60 ? Math.floor(time / 60) : 0
        const seconds = Math.floor(time - minutes * 60);

        return `${minutes >= 10 ? minutes : '0' + minutes}: ${seconds >= 10 ? seconds : '0' + seconds} `
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        textStyle: {
            fontSize: fontSize
        }
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={playOrPauseSound}>
                {isPlaying ? <SoundPause /> : <SoundPlay />}
            </TouchableOpacity>
            {/* <Slider
                onValueChange={onSliderEditing}
                value={currentTime}
                maximumValue={duration}
                minimumValue={0}
                minimumTrackTintColor={'#F44336'}
                maximumTrackTintColor={'#FFFFFF'}
                thumbTintColor={'#F44336'}
                step={1}
            /> */}
            <VideoProgressBar
                currentTime={currentTime}
                duration={duration > 0 ? duration : 0}
                onSlideStart={console.log("")}
                onSlideComplete={console.log("")}
                onSlideCapture={onSliderEditing} />
        </View>
    );
}

export default SoundComponentWithControl;