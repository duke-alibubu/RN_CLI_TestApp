import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
import { SoundPause, SoundPlay } from '../../assets/sound_icons';

const SoundTestScreen = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const soundRef = useRef(new Sound("http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"));
    const playSound = () => {
        if (isPlaying) {
            soundRef.current.pause();
        }
        else {
            soundRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={playSound}>
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