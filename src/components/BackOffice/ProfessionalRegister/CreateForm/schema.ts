import { FieldValues } from 'react-hook-form';
import { z } from 'zod';

const ProfessionalFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  profession: z
    .string()
    .min(2, 'La profesión debe tener al menos 2 caracteres'),
  email: z.string().email({ message: 'Correo electrónico inválido' }),
  telephone: z
    .string()
    .regex(/^\d{7,15}$/, 'El teléfono debe tener entre 7 y 15 dígitos'),
  cuit: z.string().min(2, 'El CUIT debe tener al menos 8 caracteres'),
  description: z
    .string()
    .min(10, 'La descripcion debe tener al menos 10 caracteres')
    .max(255, 'La descripcion debe tener menos de 255 caracteres'),
  imageUser: z
    .object({
      url: z.string().optional(),
      fileName: z.string().optional(),
      public_id: z.string().optional(),
    })
    .optional(),
  images: z
    .array(
      z.object({
        url: z.string(),
        fileName: z.string(),
        public_id: z.string().optional(),
      })
    )
    .optional(),
  acceptTerms: z.literal(true).refine((val) => val === true, {
    message: 'Debes aceptar los términos y condiciones',
  }),
  acceptPrivacyPolicy: z.literal(true).refine((val) => val === true, {
    message: 'Debes aceptar la política de privacidad',
  }),
  registrationNumber: z.string().optional(),
  reasonSocial: z.string().optional(),
  available: z.boolean().optional(),
});

type ProfessionalSchemaType =
  | z.infer<typeof ProfessionalFormSchema>
  | FieldValues;

export { ProfessionalFormSchema };
export type { ProfessionalSchemaType };
