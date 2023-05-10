import React from 'react';
import { Image, Text, View, Pressable, FlatList } from 'react-native';
import { MotiView } from 'moti';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ContainPages } from '../../../components';
import { categoriesData, promotion } from '../../../constants';
import { RedirectRegisterLogin, CaregoriesItem } from './components';
import { ITabPublicNavigator } from '../../../routes/public/@types';

export const Home: React.FC = () => {
    const navigationStack =
        useNavigation<NavigationProp<ITabPublicNavigator>>();

    return (
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
                        renderItem={({ item }) => (
                            <CaregoriesItem data={item} />
                        )}
                        horizontal
                        style={{
                            borderBottomWidth: 1,
                            borderTopWidth: 1,
                            borderBottomColor: '#EAF2F0',
                            borderTopColor: '#EAF2F0',
                            paddingBottom: 8,
                        }}
                    />
                </View>
                <MotiView
                    className="w-full"
                    from={{ opacity: 0, rotateY: '180deg' }}
                    animate={{ opacity: 1, rotateY: '0deg' }}
                >
                    <Pressable
                        className="bg-plt-white w-full h-[48vh] mt-7 mb-2 rounded-lg flex items-center justify-center border-2 border-plt-yellow"
                        onPress={() => navigationStack.navigate('SignInTab')}
                    >
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
};
