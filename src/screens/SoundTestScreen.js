import React from 'react'
import { View, StyleSheet } from 'react-native';
import SoundComponentNoControl from '../components/sound/SoundComponentNoControl';

const SoundTestScreen = () => {
    return (
        <View style={styles.container}>
            <SoundComponentNoControl text={"Test Audio 1"} fontSize={15} uri={"https://dl.espressif.com/dl/audio/gs-16b-2c-44100hz.mp3"} />
            <SoundComponentNoControl text={"Test Audio 2"} fontSize={35} uri={"https://dl.espressif.com/dl/audio/gs-16b-2c-44100hz.mp3"} />
            <SoundComponentNoControl text={"Test Audio 3"} fontSize={25} uri={"https://dl.espressif.com/dl/audio/gs-16b-2c-44100hz.mp3"} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default SoundTestScreen;