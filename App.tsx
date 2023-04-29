import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import {
    useFonts,
    Rufina_400Regular,
    Rufina_700Bold,
} from '@expo-google-fonts/rufina';
import RoutesDeliveryIt from './src/routes';

const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        Rufina_400Regular,
        Rufina_700Bold,
    });

    if (!fontsLoaded) {
        return (
            <View className="bg-black flex-1 items-center justify-center">
                <Text className="text-plt-orange">carregando...</Text>
            </View>
        );
    }

    return (
        <>
            <RoutesDeliveryIt />
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
        </>
    );
};

export default App;
