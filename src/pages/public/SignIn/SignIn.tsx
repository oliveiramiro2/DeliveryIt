import React, { useContext } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Pressable,
    Alert,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    Image,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Controller } from 'react-hook-form';
import { MotiView } from 'moti';

import { ContainPages, Input } from '../../../components';
import { useLogin, useShowPassword } from './hooks';
import { login } from './functions';
import { loginBanner } from '../../../constants';
import { AuthContext } from '../../../contexts/auth';

export const SignIn: React.FC = () => {
    const { handleShowPassword, showPassword } = useShowPassword();
    const { control, errors, handleSubmit, isloading, setIsLoading } =
        useLogin();
    const { setLogined, setUid } = useContext(AuthContext);

    return (
        <ContainPages>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
                className="items-center min-h-[80vh]"
            >
                <Text className="text-plt-yellow font-dflt-bold text-2xl">
                    Faça seu login!
                </Text>

                <View
                    style={{ flex: 1 }}
                    className="w-full bg-[#ffffff04] rounded-md mt-10 items-center justify-between"
                >
                    <MotiView
                        from={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ height: 80 }}
                    >
                        <Image
                            source={loginBanner}
                            resizeMode="contain"
                            style={{ height: 180 }}
                        />
                    </MotiView>
                    <View className="w-full items-center relative bottom-5">
                        <Text className="text-plt-gray text-lg mb-1 self-start ml-10 font-dflt-regular">
                            E-mail
                        </Text>
                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { onChange, value } }) => (
                                <MotiView
                                    from={{ opacity: 0, left: 100 }}
                                    animate={{ opacity: 1, left: 0 }}
                                    transition={{
                                        type: 'timing',
                                        duration: 350,
                                    }}
                                    className="w-5/6"
                                >
                                    <Input
                                        className="text-white pb-2 border-b border-plt-yellow w-full pl-2 font-dflt-bold"
                                        placeholder="email@email.com"
                                        autoCapitalize="none"
                                        placeholderTextColor="#fff"
                                        value={value}
                                        onChangeText={onChange}
                                    />
                                </MotiView>
                            )}
                        />
                        {errors.email && (
                            <Text className="text-plt-orange mt-1 self-start ml-10 font-dflt-regular">
                                {`${errors.email?.message}`}
                            </Text>
                        )}
                        <Text className="text-plt-gray text-lg mb-1 mt-4 self-start ml-10 font-dflt-regular">
                            Senha
                        </Text>
                        <Controller
                            control={control}
                            name="password"
                            render={({ field: { onChange, value } }) => (
                                <MotiView
                                    from={{ opacity: 0, right: 100 }}
                                    animate={{ opacity: 1, right: 0 }}
                                    transition={{
                                        type: 'timing',
                                        duration: 350,
                                        delay: 350,
                                    }}
                                    className="w-5/6"
                                >
                                    <Input
                                        className="text-white pb-2 border-b border-plt-yellow w-full pl-2 font-dflt-bold"
                                        placeholder="Senha"
                                        autoCapitalize="none"
                                        secureTextEntry={!showPassword}
                                        placeholderTextColor="#fff"
                                        value={value}
                                        onChangeText={onChange}
                                    />
                                </MotiView>
                            )}
                        />
                        <View className="relative left-[36%] bottom-[32px]">
                            <Pressable onPress={handleShowPassword}>
                                <FontAwesome5
                                    name={showPassword ? 'eye-slash' : 'eye'}
                                    size={22}
                                    color="#fff"
                                />
                            </Pressable>
                        </View>
                        {errors.password && (
                            <Text className="text-plt-orange mt-1 self-start ml-10 font-dflt-regular relative bottom-6">
                                {`${errors.password?.message}`}
                            </Text>
                        )}
                    </View>
                    <MotiView
                        from={{ opacity: 0, top: 100 }}
                        animate={{ opacity: 1, top: 0 }}
                        transition={{
                            type: 'timing',
                            delay: 700,
                        }}
                        className="w-full"
                    >
                        <TouchableOpacity
                            disabled={isloading}
                            onPress={handleSubmit(
                                (data) =>
                                    login({
                                        ...data,
                                        setIsLoading,
                                        setLogined,
                                        setUid,
                                    }),
                                () => {
                                    Alert.alert(
                                        'Erro',
                                        'Desculpe dados inválidos!'
                                    );
                                }
                            )}
                            className="bg-plt-blue w-full rounded-lg py-1 items-center"
                        >
                            {isloading ? (
                                <ActivityIndicator
                                    animating
                                    color="#fff"
                                    size={25}
                                />
                            ) : (
                                <Text className="text-plt-white font-semibold font-dflt-regular text-lg">
                                    Entrar
                                </Text>
                            )}
                        </TouchableOpacity>
                    </MotiView>
                </View>
            </KeyboardAvoidingView>
        </ContainPages>
    );
};
