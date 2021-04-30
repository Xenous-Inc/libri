import React, {useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";
import {useAuth} from "../../context/SupabaseContext";

const WelcomeScreen: React.FC = props => {
    const auth = useAuth();
    
    useEffect(() => {
        console.log('AUTH', auth);
    }, []);
    
    return <View style={styles.container}>
        <Text>
            Open up App.tsx to start working on your app!
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default WelcomeScreen;