import { z } from 'zod';

export const schemaRegisterCostumer = z
    .object({
        email: z.string().email('Por favor, digite um email válido!'),
        password: z
            .string()
            .min(8, 'Sua senha deve ter no mínimo 8 caracteres!'),
        confirmPassword: z
            .string()
            .min(8, 'Sua senha deve ter no mínimo 8 caracteres!'),
        cpf: z
            .string()
            .length(14, 'Por favor, digite um cpf válido!'),
        phone: z
            .string()
            .length(11, 'Por favor, digite seu número com DDD!'),
        name: z
            .string()
            .min(2, 'Por favor, digite seu nome!'),
    })
    .refine((fields) => fields.password === fields.confirmPassword, {
        path: ['confirmPassword'],
        message: 'As senhas devem ser iguais!',
    });

export const schemaRegisterBusiness = z
    .object({
        email: z.string().email('Por favor, digite um email válido!'),
        password: z
            .string()
            .min(8, 'Sua senha deve ter no mínimo 8 caracteres!'),
        confirmPassword: z
            .string()
            .min(8, 'Sua senha deve ter no mínimo 8 caracteres!'),
        cnpj: z
            .string()
            .length(18, 'Por favor, digite um cnpj válido!'),
        phone: z
            .string()
            .length(11, 'Por favor, digite o número com DDD!'),
        name: z
            .string()
            .min(2, 'Por favor, digite o nome da empresa!'),
    })
    .refine((fields) => fields.password === fields.confirmPassword, {
        path: ['confirmPassword'],
        message: 'As senhas devem ser iguais!',
    });
