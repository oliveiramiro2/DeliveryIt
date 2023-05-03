import { z } from 'zod';
import { schemaLogin } from '../../utils';

export type formLoginProps = z.infer<typeof schemaLogin>;
