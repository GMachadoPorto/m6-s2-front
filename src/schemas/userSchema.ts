import { z } from "zod";

const registerSchema = z
  .object({
    name: z.string().nonempty("Nome obrigatório!").min(3),
    email: z.string().email("Email obrigatório!"),
    telephone: z
      .string()
      .nonempty("Telefone obrigatório!")
      .length(11)
      .nonempty(),
    password: z.string().nonempty("Senha obrigatória!"),
    confirmPassword: z.string().nonempty("Confirmação obrigatória!"),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas precisam ser iguais!",
  });

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  telephone: z.string().length(11),
  createdAt: z.string(),
});

const attUserSchema = userSchema.omit({
  id: true,
  createdAt: true,
});

export { registerSchema, userSchema, attUserSchema };
