import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export const LoginHome: React.FC = () => (
    <View className="w-full mb-10 mt-5 pt-5 border-t border-plt-yellow">
        <Text className="text-plt-white text-center mb-2 font-dflt-regular text-2xl">
            Já possui cadastro!!
        </Text>
        <TouchableOpacity className="bg-plt-blue py-2 items-center rounded-lg mt-3">
            <Text className="text-plt-white font-dflt-regular text-lg">
                Faça seu login
            </Text>
        </TouchableOpacity>
    </View>
);
