import { FieldValues } from 'react-hook-form';
import { z } from 'zod';

const signInFormSchema = z.object({
  password: z
    .string()
    .trim()
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' })
    .max(50, { message: 'Máximo 50 caracteres' }),
  email: z.string().trim().email({ message: 'Correo electrónico inválido' }),
});

type SignInSchemaType = z.infer<typeof signInFormSchema> | FieldValues;

export { signInFormSchema };
export type { SignInSchemaType };
