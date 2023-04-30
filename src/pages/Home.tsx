import React from 'react';
import { Text, View } from 'react-native';

import { ContainPages } from '../components';

export const Home: React.FC = () => (
    <ContainPages>
        <View className="flex items-center">
            <Text className="text-plt-yellow font-dflt-bold text-2xl">
                Bem vindo ao Delivery It!
            </Text>
        </View>
    </ContainPages>
);
