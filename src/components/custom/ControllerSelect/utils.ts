export type Value = {
  id: number;
  name: string;
}

export const DefaultFormatter = (values: Value[]) => values.map((value) => ({
  value: value.id.toString(),
  label: value.name,
}));
