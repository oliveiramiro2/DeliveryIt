import { Alert } from 'react-native';
import { SubmitHandler } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { auth } from '../../../../utils';
import { IDataLogin } from '../@types';

export const login: SubmitHandler<IDataLogin> = ({ email, password, setIsLoading }) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
        .then(async (value) => {
            await AsyncStorage.setItem('uid', value.user.uid);
        })
        .catch(() => {
            Alert.alert(
                'Erro',
                'Desculpe dados inválidos!'
            );
            setIsLoading(false);
        });
};
