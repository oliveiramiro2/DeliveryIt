import React from 'react';
import { MotiPressable } from 'moti/interactions';
import { Text, Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ICategoriesData } from '../../../../../@types';
import { ITabPublicNavigator } from '../../../../../routes/public/@types';

export const CaregoriesItem: React.FC<{ data: ICategoriesData }> = ({
    data,
}) => {
    const navigationStack =
        useNavigation<NavigationProp<ITabPublicNavigator>>();

    return (
        <MotiPressable
            from={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{
                delay: 300 * data.id,
                type: 'timing',
                duration: 300,
            }}
            style={{ marginRight: 20, alignItems: 'center' }}
            onPress={() => navigationStack.navigate('SignInTab')}
        >
            <Image
                source={data.image}
                resizeMode="contain"
                className="w-20 h-24"
            />
            <Text className="text-plt-white font-dflt-regular text">
                {data.name}
            </Text>
        </MotiPressable>
    );
};
