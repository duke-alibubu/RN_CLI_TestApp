import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
import { SoundPause, SoundPlay } from '../../../assets/sound_icons';

const SoundComponentNoControl = ({ text, fontSize, uri }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const soundRef = useRef(new Sound(uri, '', (error) => {
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
            <Text style={styles.textStyle} > {text} </Text>
        </View>
    );
}

export default SoundComponentNoControl;