import { z } from "zod";
import { loginSchema } from "../schemas";

export type iLogin = z.infer<typeof loginSchema>;
