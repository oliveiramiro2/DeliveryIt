import React from 'react';
import { View } from 'react-native';
import { MotiImage } from 'moti';

import logo from '../../assets/imgs/logo.png';
import { useAnimation } from './hooks';

export const LogoHeader: React.FC = () => {
    const { handleAnimation } = useAnimation();

    return (
        <View>
            <MotiImage
                source={logo}
                className="h-16 w-16"
                resizeMode="contain"
                from={{ opacity: 0, scale: 0, backgroundColor: '#000' }}
                animate={handleAnimation}
                transition={{
                    delay: 300,
                    type: 'timing',
                    duration: 500,
                }}
            />
        </View>
    );
};
