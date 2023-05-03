import { z } from 'zod';

export const schemaLogin = z
    .object({
        email: z.string().email('Por favor, digite um email válido!'),
        password: z
            .string()
            .min(8, 'Sua senha deve ter no mínimo 8 caracteres!'),
    });
