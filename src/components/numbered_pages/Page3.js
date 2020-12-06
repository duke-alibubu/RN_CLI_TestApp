import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const Page3 = () => {
    return (
        <View style={styles.container}>
            <Text>Page 3: Let's play</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Page3;