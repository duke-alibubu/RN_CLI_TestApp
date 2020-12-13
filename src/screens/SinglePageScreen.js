import React, { useState } from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Page1 from '../components/numbered_pages/Page1';
import Page2 from '../components/numbered_pages/Page2';
import Page3 from '../components/numbered_pages/Page3';
import Page4 from '../components/numbered_pages/Page4';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ToolbarAndroid from '@react-native-community/toolbar-android';
import Slider from '@react-native-community/slider';

const SinglePageScreen = () => {
    const navigation = useNavigation();
    const MAX_PAGE_NO = 4;
    const componentMap = {
        1: Page1,
        2: Page2,
        3: Page3,
        4: Page4
    }
    const [pageNo, setPageNo] = useState(1);
    const renderPage = () => {
        return componentMap[`${pageNo}`]();
    }

    const onRightToLeftSwipe = (event, offset) => {
        //swiping from right to LEFT
        if (event.nativeEvent.oldState === State.ACTIVE && pageNo < MAX_PAGE_NO) {
            setPageNo(pageNo + 1);
        }
    }

    const onLeftToRighttSwipe = (event, offset) => {
        //swiping from left to RIGHT
        if (event.nativeEvent.oldState === State.ACTIVE && pageNo > 1) {
            setPageNo(pageNo - 1);
        }
    }

    const openDrawer = () => {
        navigation.toggleDrawer();
    }

    return (
        <FlingGestureHandler
            direction={Directions.LEFT}
            onHandlerStateChange={onRightToLeftSwipe}>
            <FlingGestureHandler
                direction={Directions.RIGHT}
                onHandlerStateChange={onLeftToRighttSwipe}>
                <View style={styles.container}>
                    <ToolbarAndroid
                        title="This is a title"
                        navIcon={require('../../assets/toolbar_icons/menu_resize.png')}
                        onIconClicked={openDrawer}
                        style={styles.toolbar}
                    />
                    {renderPage()}
                    <Slider
                        style={styles.slider}
                        value={pageNo}
                        minimumValue={1}
                        maximumValue={MAX_PAGE_NO}
                        step={1}
                        onValueChange={(num) => setPageNo(num)}
                        minimumTrackTintColor={'#4336f4'}
                        maximumTrackTintColor={'#FFFFFF'}
                        thumbTintColor={'#4336f4'}
                    />
                    <Text style={styles.pageCounter}>Page {pageNo} of {MAX_PAGE_NO}</Text>
                </View>
            </FlingGestureHandler>
        </FlingGestureHandler >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar: {
        height: 50,
        backgroundColor: '#d3d3d3',
    },
    slider: {
        width: Dimensions.get('window').width / 2,
        alignSelf: 'center'
    },
    pageCounter: {
        alignSelf: 'center'
    }
});

export default SinglePageScreen;