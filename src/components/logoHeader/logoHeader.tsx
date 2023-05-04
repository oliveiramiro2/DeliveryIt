import React from 'react';
import { View } from 'react-native';
import { MotiImage } from 'moti';

import { logo } from '../../constants';
import { useAnimation } from './hooks';

/* eslint-disable-next-line */
export const LogoHeader: React.FC<{ time?: number }> = ({ time = 0 }) => {
    const { handleAnimation } = useAnimation(time);

    return (
        <View>
            <MotiImage
                source={logo}
                className="h-16 w-16"
                resizeMode="contain"
                from={{ opacity: 0, scale: 0, backgroundColor: '#00000090' }}
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
