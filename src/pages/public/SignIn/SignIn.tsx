import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { ContainPages } from '../../../components';

export const SignIn: React.FC = () => (
    <ContainPages>
        <View className="flex items-center">
            <Text className="text-plt-yellow font-dflt-bold text-2xl">
                Faça seu login!
            </Text>

            <View className="mt-10">
                <FontAwesome name="user-circle-o" color="#fff" size={80} />
            </View>
        </View>
    </ContainPages>
);
