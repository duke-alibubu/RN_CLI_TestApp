import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';

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
                <Text> {isPlaying ? "Pause" : "Play"} </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default SoundTestScreen;