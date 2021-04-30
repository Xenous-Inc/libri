import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {Stacks} from "./constants";
import AuthStack from "./stacks/AuthStack";
import MainStack from "./stacks/MainStack";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={Stacks.auth} screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={Stacks.auth} component={AuthStack}/>
                    <Stack.Screen name={Stacks.main} component={MainStack}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default AppNavigator;