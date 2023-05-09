import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import { IContextLoginData } from '../@types';

export const AuthContext = createContext<IContextLoginData>(
    {} as IContextLoginData
);

const Auth = ({ children }: { children: ReactNode }) => {
    const [logined, setLogined] = useState<boolean>(false);
    const [checkedLogined, setCheckedLogined] = useState<boolean>(false);
    const [uid, setUid] = useState<string>('');

    const checkIfUserIsLogined = async () => {
        const uidUser = await AsyncStorage.getItem('uid');

        if (uidUser !== null) {
            setUid(uidUser);
            setLogined(true);
        }
        setCheckedLogined(true);
    };

    useEffect(() => {
        checkIfUserIsLogined();
    }, []);

    const valueContext = useMemo(
        () => ({
            uid,
            checkedLogined,
            logined,
            setLogined,
            setUid,
        }),
        [uid, logined, checkedLogined]
    );

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;
