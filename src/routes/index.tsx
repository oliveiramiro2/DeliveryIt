import { NavigationContainer } from '@react-navigation/native';
import { Platform, SafeAreaView } from 'react-native';
import clsx from 'clsx';

import RoutesPublicDeliveryIt from './public';

const RoutesDeliveryIt = () => (
    <SafeAreaView
        className={clsx('bg-black flex-1', {
            'pt-8': Platform.OS === 'android',
        })}
    >
        <NavigationContainer>
            <RoutesPublicDeliveryIt />
        </NavigationContainer>
    </SafeAreaView>
);

export default RoutesDeliveryIt;
