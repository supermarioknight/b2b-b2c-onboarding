import { z } from "zod";

export const passwordSchema = z.object({
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, { message: "Password must be at least 8 characters long" }),
  agree: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions",
    path: ["agree"],
  }),
});

export type PasswordSchema = z.infer<typeof passwordSchema>;
