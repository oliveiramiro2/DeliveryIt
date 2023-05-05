import { z } from 'zod';
import { schemaLogin } from '../../utils';

export type formLoginProps = z.infer<typeof schemaLogin>;
export interface IDataLogin {
    email: string;
    password: string;
    setIsLoading: Function;
}
