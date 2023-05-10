import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ITabPublicNavigator } from '../../../../../routes/public/@types';

export const RegisterHome: React.FC = () => {
    const navigationStack =
        useNavigation<NavigationProp<ITabPublicNavigator>>();

    return (
        <View className="w-full my-5 pt-5 border-t border-plt-yellow">
            <Text className="text-plt-white text-center mb-2 font-dflt-regular text-2xl">
                Faça seu cadastro!!
            </Text>
            <Text className="text-plt-white font-dflt-regular text-lg mb-2">
                Como consumido compre e receba do conforto da sua casa!
            </Text>
            <Text className="text-plt-white font-dflt-regular text-lg">
                Como vendedor acelere as vendas do seu Super Mercado com vendas
                online, e mostro para seus clientes os produtos direto no
                celular!
            </Text>
            <TouchableOpacity
                className="bg-plt-blue py-2 items-center rounded-lg mt-3"
                onPress={() => navigationStack.navigate('SignUpTab')}
            >
                <Text className="text-plt-white font-dflt-regular text-lg">
                    Faça seu cadastro
                </Text>
            </TouchableOpacity>
        </View>
    );
};
