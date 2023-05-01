import { useMemo, useState } from 'react';

import { IAnimationLogo } from '../@types';

export const useAnimation = () => {
    const [animation, setAnimation] = useState<IAnimationLogo>({
        opacity: 0.5,
        scale: 1.5,
        backgroundColor: '#0000000.5',
    });

    const handleAnimation = useMemo(() => {
        setTimeout(() => {
            setAnimation({ opacity: 1, scale: 1, backgroundColor: 'none' });
        }, 800);
        return animation;
    }, [animation]);

    return {
        handleAnimation,
    };
};
