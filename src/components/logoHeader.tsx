import React from 'react';
import { View } from 'react-native';
import { MotiImage } from 'moti';

import logo from '../assets/imgs/logo.png';

export const LogoHeader: React.FC = () => (
    <View className="pr-2">
        <MotiImage
            source={logo}
            className="h-16 w-16"
            resizeMode="contain"
            from={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                delay: 300,
                type: 'timing',
                duration: 650,
            }}
        />
    </View>
);
