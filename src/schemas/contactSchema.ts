import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().nonempty("Nome obrigatório!").min(3).max(120),
  email: z.string().email("Email obrigatório!").max(60),
  telephone: z.string().nonempty("Telefone obrigatório!").length(11).nonempty(),
});

export const contactSchemaReturn = contactSchema.extend({
  id: z.number(),
});
