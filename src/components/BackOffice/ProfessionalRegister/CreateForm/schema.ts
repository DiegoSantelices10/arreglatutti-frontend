import { FieldValues } from 'react-hook-form';
import { z } from 'zod';

const ProfessionalFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  profession: z
    .string()
    .min(2, 'La profesión debe tener al menos 2 caracteres'),
  city: z.string().min(2, 'La ciudad debe tener al menos 2 caracteres'),
  email: z.string().email({ message: 'Correo electrónico inválido' }),
  telephone: z
    .string()
    .regex(/^\d{7,15}$/, 'El teléfono debe tener entre 7 y 15 dígitos'),
  dni: z.string().min(2, 'El DNI debe tener al menos 2 caracteres'),
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
  registrationNumber: z
    .string()
    .min(2, 'El numero de matricula debe tener al menos 2 caracteres'),
  reasonSocial: z.string().optional(),
  // monotributo: z
  //   .object({
  //     fileName: z.string(),
  //     file: z.any(), // el archivo como tal (Blob/File), validación ligera
  //     type: z.string().regex(/^application\/pdf$/, 'Debe ser un archivo PDF'),
  //   })
  //   .refine((data) => data.file instanceof File, {
  //     message: 'Debe adjuntar un archivo PDF válido',
  //   }),
});

type ProfessionalSchemaType =
  | z.infer<typeof ProfessionalFormSchema>
  | FieldValues;

export { ProfessionalFormSchema };
export type { ProfessionalSchemaType };
