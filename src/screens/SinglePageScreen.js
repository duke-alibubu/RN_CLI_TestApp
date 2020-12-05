import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';
import Page1 from '../components/numbered_pages/Page1';
import Page2 from '../components/numbered_pages/Page2';
import Page3 from '../components/numbered_pages/Page3';
import Page4 from '../components/numbered_pages/Page4';

const SinglePageScreen = () => {
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
    return (
        <View style={styles.container}>
            {renderPage()}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default SinglePageScreen;