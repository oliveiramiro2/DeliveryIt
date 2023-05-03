import React from 'react';
import { View, Text } from 'react-native';

import { ContainPages } from '../../../components';

export const SignUp: React.FC = () => (
    <ContainPages>
        <View style={{ flex: 1 }} className="items-center min-h-[80vh]">
            <Text className="text-plt-yellow font-dflt-bold text-2xl">
                Faça seu cadastro!
            </Text>
        </View>
    </ContainPages>
);
