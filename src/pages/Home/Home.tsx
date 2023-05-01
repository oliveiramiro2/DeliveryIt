import React from 'react';
import {
    Image,
    Text,
    View,
    Pressable,
    FlatList,
} from 'react-native';
import { MotiView } from 'moti';

import { ContainPages } from '../../components';
import promotion from '../../assets/imgs/off.png';
import { categoriesData } from '../../constants';
import { RedirectRegisterLogin, CaregoriesItem } from './components';

export const Home: React.FC = () => (
    <ContainPages>
        <View className="flex items-center">
            <Text className="text-plt-yellow font-dflt-bold text-2xl">
                Bem vindo ao Delivery It!
            </Text>
            <View className="bg-plt-black w-full mt-5">
                <Text className="text-plt-white font-dflt-bold text-2xl mb-3">
                    Principais categorias
                </Text>
                <FlatList
                    data={categoriesData}
                    keyExtractor={(item) => String(item.id)}
                    ListEmptyComponent={() => <Text>Carregando...</Text>}
                    renderItem={({ item }) => <CaregoriesItem data={item} />}
                    horizontal
                    contentContainerStyle={{
                        display: 'flex',
                        columnGap: 50,
                        marginRight: 50,
                    }}
                    style={{ display: 'flex', columnGap: 50 }}
                />
            </View>
            <MotiView
                className="w-full"
                from={{ opacity: 0, rotateY: '180deg' }}
                animate={{ opacity: 1, rotateY: '0deg' }}
            >
                <Pressable className="bg-plt-white w-full h-[48vh] mt-7 rounded-lg flex items-center justify-center border-2 border-plt-yellow">
                    <Text className="text-plt-orange font-dflt-bold text-2xl mb-3">
                        Promoções
                    </Text>
                    <Image
                        source={promotion}
                        resizeMode="contain"
                        className="w-[95%] h-[40vh] rounded-md"
                    />
                </Pressable>
            </MotiView>
            <RedirectRegisterLogin />
        </View>
    </ContainPages>
);
