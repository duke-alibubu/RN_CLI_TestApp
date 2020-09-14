import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video';
import { PLAYER_STATES } from 'react-native-media-controls';
import VideoProgressBar from '../components/VideoProgressBar';
import VideoPlayerControl from '../components/VideoPlayerControl';

class TestVideoScreen extends Component {
    videoPlayerRef;
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0,
            duration: 0,
            isFullScreen: false,
            isLoading: true,
            paused: false,
            playerState: PLAYER_STATES.PLAYING,
            screenType: 'content',
        };
    }

    onSeek = seek => {
        //Handler for change in seekbar
        this.videoPlayer.seek(seek);
    };

    pauseVideo = () => {
        //Handler for Video Pause
        this.setState({
            paused: true,
            playerState: PLAYER_STATES.PAUSED,
        });
    };

    resumeVideo = () => {
        this.setState({
            paused: false,
            playerState: PLAYER_STATES.PLAYING,
        });
    }

    onReplay = () => {
        //Handler for Replay
        this.setState({ playerState: PLAYER_STATES.PLAYING });
        this.videoPlayerRef.seek(0);
    };

    onProgress = data => {
        const { isLoading, playerState } = this.state;
        // Video Player will continue progress even if the video already ended
        if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
            this.setState({ currentTime: data.currentTime });
        }
    };

    onLoad = data => this.setState({ duration: data.duration, isLoading: false });

    onLoadStart = data => this.setState({ isLoading: true });

    onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });

    onError = () => alert('Oh! ', error);

    exitFullScreen = () => {
        alert('Exit full screen');
    };

    enterFullScreen = () => { };

    onFullScreen = () => {
        if (this.state.screenType == 'content')
            this.setState({ screenType: 'cover' });
        else this.setState({ screenType: 'content' });
    };

    onSeeking = currentTime => this.setState({ currentTime });

    render() {
        return (
            <TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Video
                        // ref={this.videoPlayerRef}
                        onEnd={this.onEnd}
                        onLoad={this.onLoad}
                        onLoadStart={this.onLoadStart}
                        onProgress={this.onProgress}
                        paused={this.state.paused}
                        ref={videoPlayer => (this.videoPlayer = videoPlayer)}
                        resizeMode={this.state.screenType}
                        onFullScreen={this.state.isFullScreen}
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                        style={styles.mediaPlayer}
                        volume={10}
                        fullscreen={false}
                        resizeMode={'contain'}
                    />
                    <View style={styles.controlOverlay}>
                        <VideoPlayerControl
                            playerState={this.state.playerState}
                            onPlay={this.resumeVideo}
                            onPause={this.pauseVideo}
                        />
                        <VideoProgressBar
                            style={styles.mediaControls}
                            currentTime={this.state.currentTime}
                            duration={this.state.duration > 0 ? this.state.duration : 0}
                            onSlideStart={console.log("")}
                            onSlideComplete={console.log("")}
                            onSlideCapture={this.onSeek}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebeb'
    },
    mediaPlayer: {
        height: Dimensions.get('window').width * (9 / 16),
        width: Dimensions.get('window').width,
        backgroundColor: 'black',
    },
    controlOverlay: {
        position: 'absolute',
        height: Dimensions.get('window').width * (9 / 16),
        width: Dimensions.get('window').width,
        justifyContent: 'space-between',
    },
});
export default TestVideoScreen;