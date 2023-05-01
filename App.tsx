import React from 'react';
import { StatusBar } from 'react-native';
import {
    useFonts,
    Rufina_400Regular,
    Rufina_700Bold,
} from '@expo-google-fonts/rufina';

import RoutesDeliveryIt from './src/routes';
import { LoadingApp } from './src/components/index';

const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        Rufina_400Regular,
        Rufina_700Bold,
    });

    if (!fontsLoaded) return <LoadingApp />;

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
