import React from 'react';
import { Image, Text, View, Pressable, FlatList } from 'react-native';
import { MotiView, MotiText } from 'moti';

import { ContainPages } from '../../components';
import promotion from '../../assets/imgs/off.png';
import { categoriesData } from '../../constants';

export const Home: React.FC = () => (
    <ContainPages>
        <View className="flex items-center">
            <MotiText
                from={{ bottom: 50, opacity: 0, scaleY: 0 }}
                animate={{ bottom: 0, opacity: 1, scaleY: 1.5 }}
                className="text-plt-yellow font-dflt-bold text-2xl"
            >
                Bem vindo ao Delivery It!
            </MotiText>
            <View className="bg-plt-black h-20 w-full mt-5">
                <Text className="text-plt-white font-dflt-regular text-2xl mb-3">
                    Principais categorias
                </Text>
                <FlatList
                    data={categoriesData}
                    keyExtractor={(item) => String(item.id)}
                    ListEmptyComponent={() => <Text>Carregando...</Text>}
                    renderItem={() => <Text className="text-white">aaaa</Text>}
                    horizontal
                />
            </View>
            <MotiView
                className="w-full"
                from={{ opacity: 0, rotateY: '180deg' }}
                animate={{ opacity: 1, rotateY: '0deg' }}
            >
                <Pressable className="bg-plt-white w-full h-[48vh] mt-7 rounded-lg flex items-center justify-center border-2 border-plt-yellow">
                    <Text className="text-plt-orange font-dflt-regular text-2xl mb-3">
                        Promoções
                    </Text>
                    <Image
                        source={promotion}
                        resizeMode="contain"
                        className="w-[95%] h-[40vh] rounded-md"
                    />
                </Pressable>
            </MotiView>
        </View>
    </ContainPages>
);
