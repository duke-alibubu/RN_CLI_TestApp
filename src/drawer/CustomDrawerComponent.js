import React from 'react';
import { View, Text } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';

const CustomDrawerComponent = ({ progress, ...rest }) => {
    const translateX = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });

    return (
        <DrawerContentScrollView {...rest}>
            <Text>    Welcome to CZ2004, pal! </Text>
            <Animated.View style={{ transform: [{ translateX }] }}>
                <DrawerItemList {...rest} />
                <DrawerItem label="About Us" onPress={() => alert('Developer: Trinh Tuan Dung')} />
            </Animated.View>
        </DrawerContentScrollView>
    );
}

export default CustomDrawerComponent;