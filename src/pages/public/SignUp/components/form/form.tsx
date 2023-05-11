import { View, Text } from 'react-native';
import React from 'react';

export const Form: React.FC<{ costumer?: boolean }> = ({
    costumer = false,
}) => (
    <View>
        <Text className="text-white">
            form {costumer ? 'consumidor' : 'empresa'}
        </Text>
    </View>
);
