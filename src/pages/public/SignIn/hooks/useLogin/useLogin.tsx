import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { formLoginProps } from '../../@types';
import { schemaLogin } from '../../utils';

export const useLogin = () => {
    const [isloading, setIsLoading] = useState<boolean>(false);
    const schema = schemaLogin;

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<formLoginProps>({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(schema),
        reValidateMode: 'onChange',
    });

    return {
        handleSubmit,
        control,
        errors,
        isloading,
        setIsLoading,
    };
};
