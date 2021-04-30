import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Screens} from "../constants";
import FeedScreen from "../../screens/main/feed/FeedScreen";
import BookScreen from "../../screens/main/book/BookScreen";

const Stack = createStackNavigator();

const MainStack: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName={Screens.main.feed} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Screens.main.feed} component={FeedScreen}/>
            <Stack.Screen name={Screens.main.book} component={BookScreen}/>
        </Stack.Navigator>
    )
};

export default MainStack;