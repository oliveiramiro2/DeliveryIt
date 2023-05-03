import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MotiView } from 'moti';

import { ContainPages } from '../../../components';

export const SignUp: React.FC = () => (
    <ContainPages>
        <View className="items-center">
            <Text className="text-plt-yellow font-dflt-bold text-2xl">
                Faça seu cadastro!
            </Text>
            <View className="items-center">
                <View className="flex flex-row items-center justify-center gap-x-5 mt-[25vh]">
                    <MotiView
                        from={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-[40vw]"
                    >
                        <Pressable className="items-center justify-center w-[40vw] bg-plt-blue py-2 rounded-lg">
                            <Text className="text-plt-white max-w-[40vw] text-center text-lg mb-2 font-dflt-regular">
                                Cadastro de consumidor!
                            </Text>
                            <FontAwesome name="user" color="#fff" size={40} />
                        </Pressable>
                    </MotiView>
                    <MotiView
                        from={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-[40vw]"
                    >
                        <Pressable
                            style={{
                                shadowOffset: { width: 5000, height: 5000 },
                                shadowColor: '#fff',
                                shadowOpacity: 100,
                            }}
                            className="items-center justify-center w-[40vw] bg-plt-blue py-2 rounded-lg"
                        >
                            <Text className="text-plt-white max-w-[40vw] text-center text-lg mb-2 font-dflt-regular">
                                Cadastro de empresa!
                            </Text>
                            <Ionicons
                                name="business-sharp"
                                color="#fff"
                                size={40}
                            />
                        </Pressable>
                    </MotiView>
                </View>
            </View>
        </View>
    </ContainPages>
);
