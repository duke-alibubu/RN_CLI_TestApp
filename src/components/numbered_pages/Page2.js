import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const Page2 = () => {
    return (
        <View style={styles.container}>
            <Text>Page 2: Let's study math...</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Page2;