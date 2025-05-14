import { FieldValues } from 'react-hook-form';
import { z } from 'zod';

const ContactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  telephone: z
    .string()
    .regex(/^\d{7,15}$/, 'El teléfono debe tener entre 7 y 15 dígitos'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  profession: z
    .string()
    .min(2, 'La profesión debe tener al menos 2 caracteres'),
  acceptTerms: z.literal(true).refine((val) => val === true, {
    message: 'Debes aceptar los términos y condiciones',
  }),
});

type ContactSchemaType = z.infer<typeof ContactFormSchema> | FieldValues;

export { ContactFormSchema };
export type { ContactSchemaType };
