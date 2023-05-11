import React from 'react';
import { View, Text } from 'react-native';

import { ContainPages } from '../../../../../components';
import { Form } from '..';

export const Consumer: React.FC = () => (
    <ContainPages>
        <View className="items-center min-h-[82vh]">
            <Text className="text-plt-yellow font-dflt-bold text-2xl">
                Cadastre-se para comprar!
            </Text>
            <Form costumer />
        </View>
    </ContainPages>
);
