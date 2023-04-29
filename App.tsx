import React from 'react';
import { Text, View } from 'react-native';
import {
    useFonts,
    Rufina_400Regular,
    Rufina_700Bold,
} from '@expo-google-fonts/rufina';

const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        Rufina_400Regular,
        Rufina_700Bold,
    });

    if (!fontsLoaded) {
        return (
            <View className="bg-plt-black flex-1 items-center justify-center">
                <Text className="text-plt-orange">carregando...</Text>
            </View>
        );
    }

    return (
        <View className="bg-plt-black flex-1 items-center justify-center">
            <Text className="text-plt-orange font-bold">
                Open up App.tsx to start working on your app!
            </Text>
            <Text className="text-plt-orange font-dflt_regular">
                Open up App.tsx to start working on your app!
            </Text>
        </View>
    );
};

export default App;
