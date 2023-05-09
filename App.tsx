import React from 'react';
import { StatusBar } from 'react-native';
import {
    useFonts,
    Rufina_400Regular,
    Rufina_700Bold,
} from '@expo-google-fonts/rufina';

import RoutesDeliveryIt from './src/routes';
import { LoadingApp } from './src/components/index';
import DeliveryItContexts from './src/contexts';

const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        Rufina_400Regular,
        Rufina_700Bold,
    });

    if (!fontsLoaded) return <LoadingApp />;

    return (
        <DeliveryItContexts>
            <RoutesDeliveryIt />
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
        </DeliveryItContexts>
    );
};

export default App;
