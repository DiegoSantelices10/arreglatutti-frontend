import { FieldValues } from 'react-hook-form';
import { z } from 'zod';

const ContentFormSchema = z.object({
  password: z.string().min(6, 'El mensaje debe tener al menos 6 caracteres'),
});

type ContentFormSchemaType = z.infer<typeof ContentFormSchema> | FieldValues;

export { ContentFormSchema };
export type { ContentFormSchemaType };
