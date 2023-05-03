import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Controller } from 'react-hook-form';

import { ContainPages, Input } from '../../../components';
import { useLogin, useShowPassword } from './hooks';

export const SignIn: React.FC = () => {
    const { handleShowPassword, showPassword } = useShowPassword();
    const { control, errors } = useLogin();

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
                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    className="bg-plt-white border border-plt-yellow w-5/6 rounded-md pl-2 text-black font-dflt-bold"
                                    placeholder="email@email.com"
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                        />
                        {errors.email && (
                            <Text className="text-plt-orange mt-1 self-start ml-10 font-dflt-regular">
                                {`${errors.email?.message}`}
                            </Text>
                        )}
                        <Text className="text-plt-white text-lg mb-1 mt-4 self-start ml-10 font-dflt-regular">
                            Senha
                        </Text>
                        <Controller
                            control={control}
                            name="password"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    className="bg-plt-white border border-plt-yellow w-5/6 rounded-md pl-2 text-black font-dflt-bold"
                                    placeholder="Senha"
                                    secureTextEntry={!showPassword}
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                        />
                        <View className="relative left-[36%] bottom-[26px]">
                            <Pressable onPress={handleShowPassword}>
                                <FontAwesome5
                                    name={showPassword ? 'eye-slash' : 'eye'}
                                    size={22}
                                />
                            </Pressable>
                        </View>
                        {errors.password && (
                            <Text className="text-plt-orange mt-1 self-start ml-10 font-dflt-regular relative bottom-6">
                                {`${errors.password?.message}`}
                            </Text>
                        )}
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
