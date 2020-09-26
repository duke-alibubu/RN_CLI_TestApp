import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video';
import { PLAYER_STATES } from 'react-native-media-controls';
import VideoPlayerControl from './VideoPlayerControl';
import VideoProgressBar from './VideoProgressBar';

const VideoComponent = ({ videoHeight, videoWidth }) => {
    const SHOW_CONTROL_TIMEOUT = 2500;
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isFullScr, setIsFullScr] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [paused, setPaused] = useState(false);
    const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);
    const [screenType, setScreenType] = useState('content');
    const [showControls, setShowControls] = useState(true);

    const videoPlayerRef = useRef(React.createRef());

    useEffect(() => {
        setTimeout(() => {
            setShowControls(false);
        }, SHOW_CONTROL_TIMEOUT);
    }, [])
    const doSeek = seek => {
        //Handler for change in seekbar
        videoPlayerRef.current.seek(seek);
    };

    const pauseVideo = () => {
        setPaused(true);
        setPlayerState(PLAYER_STATES.PAUSED)
        setShowControls(true);
    };

    const resumeVideo = () => {
        setPaused(false);
        setPlayerState(PLAYER_STATES.PLAYING)
        setTimeout(() => {
            setShowControls(false);
        }, SHOW_CONTROL_TIMEOUT)
    }

    const onReplay = async () => {
        //Handler for Replay
        await videoPlayerRef.current.seek(0);
        setCurrentTime(0);
        pauseVideo();
        resumeVideo();
    };

    const onProgress = data => {
        // Video Player will continue progress even if the video already ended
        if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
            setCurrentTime(data.currentTime);
        }
    };

    const onLoad = data => {
        setDuration(data.duration);
        setIsLoading(false);
    }

    const onLoadStart = data => setIsLoading(true);

    const onEnd = () => {
        setPlayerState(PLAYER_STATES.ENDED);
        setPaused(true);
        setShowControls(true);
    }

    const onError = () => alert('Oh! ', error);

    const toggleShowControls = () => {
        if (showControls) {
            setShowControls(false);
        }
        else {
            setShowControls(true);
            setTimeout(() => {
                setShowControls(false);
            }, SHOW_CONTROL_TIMEOUT);
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ebebeb'
        },
        mediaPlayer: {
            // height: Dimensions.get('window').width * (9 / 16),
            // width: Dimensions.get('window').width,
            height: videoHeight,
            width: videoWidth,
            backgroundColor: 'black',
        },
        controlOverlay: {
            position: 'absolute',
            height: videoHeight,
            width: videoWidth,
            justifyContent: 'space-between',
        },
    });

    return (
        <TouchableWithoutFeedback onPress={toggleShowControls}>
            <View style={styles.container}>
                <Video
                    // repeat={true}
                    onEnd={onEnd}
                    onLoad={onLoad}
                    onLoadStart={onLoadStart}
                    onProgress={onProgress}
                    paused={paused}
                    ref={videoPlayer => (videoPlayerRef.current = videoPlayer)}
                    resizeMode={screenType}
                    onFullScreen={isFullScr}
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    style={styles.mediaPlayer}
                    volume={10}
                    fullscreen={false}
                    resizeMode={'contain'}
                />
                {showControls && <View style={styles.controlOverlay}>
                    <VideoPlayerControl
                        playerState={playerState}
                        onPlay={resumeVideo}
                        onPause={pauseVideo}
                        onReplay={onReplay}
                    />
                    <VideoProgressBar
                        style={styles.mediaControls}
                        currentTime={currentTime}
                        duration={duration > 0 ? duration : 0}
                        onSlideStart={console.log("")}
                        onSlideComplete={console.log("")}
                        onSlideCapture={doSeek}
                    />
                </View>}
            </View>
        </TouchableWithoutFeedback>
    );
}

export default VideoComponent;