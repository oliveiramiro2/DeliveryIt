import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import { ContainPages, Input } from '../../../components';
import { useShowPassword } from './hooks';

export const SignIn: React.FC = () => {
    const { handleShowPassword, showPassword } = useShowPassword();

    return (
        <ContainPages>
            <View style={{ flex: 1 }} className="items-center min-h-[80vh]">
                <Text className="text-plt-yellow font-dflt-bold text-2xl">
                    Faça seu login!
                </Text>

                <View
                    style={{ flex: 1 }}
                    className="w-full bg-[#ffffff04] rounded-md mt-10 items-center justify-between"
                >
                    <FontAwesome name="user-circle-o" color="#fff" size={80} />
                    <View className="w-full items-center relative bottom-5">
                        <Text className="text-plt-white text-lg mb-1 self-start ml-10 font-dflt-regular">
                            E-mail
                        </Text>
                        <Input
                            className="bg-plt-white w-5/6 mb-6 rounded-md pl-2 font-dflt-regular"
                            placeholder="email@email.com"
                            value=""
                            onChangeText={() => console.log('')}
                        />
                        <Text className="text-plt-white text-lg mb-1 self-start ml-10 font-dflt-regular">
                            Senha
                        </Text>
                        <Input
                            className="bg-plt-white w-5/6 rounded-md pl-2 font-dflt-regular"
                            placeholder="Senha"
                            secureTextEntry={!showPassword}
                            value=""
                            onChangeText={() => console.log('')}
                        />
                        <View className="relative left-[37%] bottom-6">
                            <Pressable onPress={handleShowPassword}>
                                <FontAwesome5
                                    name={showPassword ? 'eye-slash' : 'eye'}
                                    size={22}
                                />
                            </Pressable>
                        </View>
                    </View>
                    <TouchableOpacity className="bg-plt-blue w-full rounded-lg py-1 items-center">
                        <Text className="text-plt-white font-semibold font-dflt-regular text-lg">
                            Entrar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ContainPages>
    );
};
