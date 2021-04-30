import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamsList } from '../types';
import { Screens } from '../constants';
import WelcomeScreen from "../../screens/auth/WelcomeScreen";
import SignInScreen from "../../screens/auth/SignInScreen";
import SignUpScreen from "../../screens/auth/SignUpScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName={Screens.auth.welcome} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Screens.auth.welcome} component={WelcomeScreen} />
            <Stack.Screen name={Screens.auth.signIn} component={SignInScreen} />
            <Stack.Screen name={Screens.auth.signUp} component={SignUpScreen} />
        </Stack.Navigator>
    );
}

export default AuthStack;