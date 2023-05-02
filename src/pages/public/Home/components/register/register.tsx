import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export const RegisterHome: React.FC = () => (
    <View className="w-full my-5 pt-5 border-t border-plt-yellow">
        <Text className="text-plt-white text-center mb-2 font-dflt-regular text-2xl">
            Faça seu cadastro!!
        </Text>
        <Text className="text-plt-white font-dflt-regular text-lg mb-2">
            Como consumido compre e receba do conforto da sua casa!
        </Text>
        <Text className="text-plt-white font-dflt-regular text-lg">
            Como vendedor acelere as vendas do seu Super Mercado com vendas
            online, e mostro para seus clientes os produtos direto no celular!
        </Text>
        <TouchableOpacity className="bg-plt-blue py-2 items-center rounded-lg mt-3">
            <Text className="text-plt-white font-dflt-regular text-lg">
                Faça seu cadastro
            </Text>
        </TouchableOpacity>
    </View>
);
