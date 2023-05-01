import React from 'react';
import { ImageBackground } from 'react-native';

import { delivery } from '../../constants/images';

export const LoadingApp: React.FC = () => (
    <ImageBackground
        source={delivery}
        style={{ flex: 1 }}
        resizeMode="contain"
    />
);
