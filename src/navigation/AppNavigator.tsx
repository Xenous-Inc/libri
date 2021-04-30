import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthStack from './stacks/AuthStack';
import MainStack from './stacks/MainStack';
import { Stacks } from './constants';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={Stacks.auth} screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={Stacks.auth} component={AuthStack} />
                    <Stack.Screen name={Stacks.main} component={MainStack} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default AppNavigator;