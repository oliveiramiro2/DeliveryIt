import React from 'react';
import { MotiPressable } from 'moti/interactions';
import { Text, Image } from 'react-native';

import { ICategoriesData } from '../../../../../@types';

export const CaregoriesItem: React.FC<{ data: ICategoriesData }> = ({
    data,
}) => (
    <MotiPressable
        from={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{
            delay: 300 * data.id,
            type: 'timing',
            duration: 300,
        }}
        style={{ marginRight: 20, alignItems: 'center' }}
    >
        <Image source={data.image} resizeMode="contain" className="w-20 h-24" />
        <Text className="text-plt-white font-dflt-regular text">
            {data.name}
        </Text>
    </MotiPressable>
);
