import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';
import Page1 from '../components/numbered_pages/Page1';
import Page2 from '../components/numbered_pages/Page2';
import Page3 from '../components/numbered_pages/Page3';
import Page4 from '../components/numbered_pages/Page4';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';

const SinglePageScreen = () => {
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

    return (
        <FlingGestureHandler
            direction={Directions.LEFT}
            onHandlerStateChange={onRightToLeftSwipe}>
            <FlingGestureHandler
                direction={Directions.RIGHT}
                onHandlerStateChange={onLeftToRighttSwipe}>
                <View style={styles.container}>
                    {renderPage()}
                </View>
            </FlingGestureHandler>
        </FlingGestureHandler >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default SinglePageScreen;