import { useMemo, useState } from 'react';

import { IAnimationLogo } from '../@types';

export const useAnimation = (time: number) => {
    const [animation, setAnimation] = useState<IAnimationLogo>({
        opacity: 0.5,
        scale: 1.5,
        backgroundColor: '#ffffff61',
    });

    const handleAnimation = useMemo(() => {
        setTimeout(() => {
            setAnimation({ opacity: 1, scale: 1, backgroundColor: 'none' });
        }, 800 + time);
        return animation;
    }, [animation]);

    return {
        handleAnimation,
    };
};
