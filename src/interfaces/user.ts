import { z } from "zod";
import { attUserSchema, registerSchema, userSchema } from "../schemas";

export type iRegister = z.infer<typeof registerSchema>;
export type iUser = z.infer<typeof userSchema>;
export type iAttUser = z.infer<typeof attUserSchema>;
