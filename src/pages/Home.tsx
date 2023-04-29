import React from 'react';
import { Text, SafeAreaView, Platform } from 'react-native';
import clsx from 'clsx';

export const Home: React.FC = () => (
    <SafeAreaView
        className={clsx('bg-black flex-1', {
            'pt-4': Platform.OS === 'android',
        })}
    >
        <Text className="text-plt-orange dflt-regular">
            Open up App.tsx to start working on your app!
        </Text>
        <Text className="text-plt-orange font-dflt-bold">
            Open up App.tsx to start working on your app!
        </Text>
    </SafeAreaView>
);
