import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ITabPublicNavigator } from '../../../../../routes/public/@types';

export const LoginHome: React.FC = () => {
    const navigationStack =
        useNavigation<NavigationProp<ITabPublicNavigator>>();

    return (
        <View className="w-full mb-10 mt-5 pt-5 border-t border-plt-yellow">
            <Text className="text-plt-white text-center mb-2 font-dflt-regular text-2xl">
                Já possui cadastro!!
            </Text>
            <TouchableOpacity
                className="bg-plt-blue py-2 items-center rounded-lg mt-3"
                onPress={() => navigationStack.navigate('SignInTab')}
            >
                <Text className="text-plt-white font-dflt-regular text-lg">
                    Faça seu login
                </Text>
            </TouchableOpacity>
        </View>
    );
};
