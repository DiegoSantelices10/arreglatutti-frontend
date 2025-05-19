import { FieldValues } from 'react-hook-form';
import { z } from 'zod';

const ClientFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email({ message: 'Correo electrónico inválido' }),
  profession: z.string({ message: 'Debe seleccionar una profesión' }),
  address: z.string().min(2, 'La direccion debe tener al menos 2 caracteres'),
  telephone: z
    .string()
    .regex(/^\d{7,15}$/, 'El teléfono debe tener entre 7 y 15 dígitos'),
  acceptTerms: z.literal(true).refine((val) => val === true, {
    message: 'Debes aceptar los términos y condiciones',
  }),
  acceptPrivacyPolicy: z.literal(true).refine((val) => val === true, {
    message: 'Debes aceptar la política de privacidad',
  }),
});

type ClientSchemaType = z.infer<typeof ClientFormSchema> | FieldValues;

export { ClientFormSchema };
export type { ClientSchemaType };
