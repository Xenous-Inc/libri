import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamsList } from '../types';
import { Screens } from '../constants';
import FeedScreen from "../../screens/main/FeedScreen";
import BookScreen from "../../screens/main/BookScreen";

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName={Screens.main.feed} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Screens.main.feed} component={FeedScreen} />
            <Stack.Screen name={Screens.main.book} component={BookScreen} />
        </Stack.Navigator>
    );
}

export default MainStack;