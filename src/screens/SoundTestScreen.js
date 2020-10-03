import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
import { SoundPause, SoundPlay } from '../../assets/sound_icons';

const SoundTestScreen = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const soundRef = useRef(new Sound("https://dl.espressif.com/dl/audio/gs-16b-2c-44100hz.mp3", '', (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            Alert.alert('Notice', 'audio file error. (Error code : 1)');
            this.setState({ playState: 'paused' });
        }
    }));

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
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={playOrPauseSound}>
                {isPlaying ? <SoundPause /> : <SoundPlay />}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SoundTestScreen;