import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const signupSchema = z.object({
  company: z.string({
    required_error: "Company Name is required",
  }),
  firstName: z.string({
    required_error: "First Name is required",
  }),
  lastName: z.string({
    required_error: "Last Name is required",
  }),
  email: z
    .string({
      required_error: "Email Address is required",
    })
    .email({ message: "Invalid email format" }),
  phoneNumber: z
    .string({
      required_error: "Phone Number is required",
    })
    .regex(phoneRegex, "Invalid Phone number!"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, { message: "Password must be at least 8 characters long" }),
  // agree: z.boolean().refine((value) => value === true, {
  //   message: "You must agree to the terms and conditions",
  //   path: ["agree"],
  // }),
});

export type SignupSchema = z.infer<typeof signupSchema>;
