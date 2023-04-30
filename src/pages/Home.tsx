import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import { ContainPages } from '../components';
import promotion from '../assets/imgs/off.png';

export const Home: React.FC = () => (
    <ContainPages>
        <View className="flex items-center">
            <Text className="text-plt-yellow font-dflt-bold text-2xl">
                Bem vindo ao Delivery It!
            </Text>
            <TouchableOpacity className="bg-plt-white w-full h-[48vh] mt-10 rounded-lg flex items-center justify-center border-2 border-plt-yellow">
                <Text className="text-plt-orange font-dflt-regular text-2xl mb-3">
                    Promoções
                </Text>
                <Image source={promotion} resizeMode="contain" className="w-[95%] h-[40vh] rounded-md" />
            </TouchableOpacity>
        </View>
    </ContainPages>
);
