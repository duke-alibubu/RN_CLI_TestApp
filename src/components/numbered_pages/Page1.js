import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const Page1 = () => {
    return (
        <View style={styles.container}>
            <Text>Page 1</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Page1;