import React from 'react';
import { View, Text } from 'react-native';

import { ContainPages } from '../../../../../components';

export const Business: React.FC = () => (
    <ContainPages>
        <View style={{ flex: 1 }} className="items-center min-h-[82vh]">
            <Text className="text-plt-yellow font-dflt-bold text-2xl">
                Cadastre sua empresa!
            </Text>
        </View>
    </ContainPages>
);
