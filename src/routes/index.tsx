import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

import RoutesPublicDeliveryIt from './public';

const RoutesDeliveryIt = () => (
    <View className="flex-1 bg-black">
        <NavigationContainer>
            <RoutesPublicDeliveryIt />
        </NavigationContainer>
    </View>
);

export default RoutesDeliveryIt;
