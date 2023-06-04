import { z } from "zod";
import { contactSchema, contactSchemaReturn } from "../schemas";

export type iContact = z.infer<typeof contactSchema>;
export type iContactReturn = z.infer<typeof contactSchemaReturn>;
