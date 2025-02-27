import { FieldValues } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  client: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  telephoneClient: z
    .string()
    .regex(/^\d{7,15}$/, 'El teléfono debe tener entre 7 y 15 dígitos'),
  messageClient: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres'),
  professionalType: z
    .string()
    .min(2, 'El tipo de profesión debe tener al menos 2 caracteres'),
  professionName: z
    .string()
    .min(2, 'La profesión debe tener al menos 2 caracteres')
    .optional(),
});

type FormSchemaType = z.infer<typeof formSchema> | FieldValues;

export { formSchema };
export type { FormSchemaType };
