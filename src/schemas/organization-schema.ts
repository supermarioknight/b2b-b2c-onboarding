import { z } from "zod";
// import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { UserProfileSchema } from "./user-schema.ts";

// extendZodWithOpenApi(z);

export enum OrganizationStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

// export const BaseOrganizationSchema = z.object({
//   organizationId: z.string().uuid().openapi({
//     description: "The organization's id",
//     example: "123e4567-e89b-12d3-a456-426614174000",
//   }),
//   organizationName: z.string().min(1).openapi({
//     description: "The organization's name",
//     example: "ACME Inc.",
//   }),
//   organizationPhone: z.string().openapi({
//     description: "The organization's phone number",
//     example: "1234567890",
//   }),
//   organizationAddress: z.object({
//     street: z.string().openapi({
//       description: "The organization's street address",
//       example: "123 Main St.",
//     }),
//     city: z.string().openapi({
//       description: "The organization's city",
//       example: "Anytown",
//     }),
//     state: z.string().openapi({
//       description: "The organization's state",
//       example: "CA",
//     }),
//     zip: z.string().openapi({
//       description: "The organization's zip code",
//       example: "12345",
//     }),
//   }),
//   numberOfEmployees: z.string().openapi({
//     description: "The number of employees in the organization",
//     example: "100",
//   }),
//   enterpriseId: z.string().optional().openapi({
//     description: "The enterprise id",
//     example: "123e4567-e89b-12d3-a456-426614174000",
//   }),
// });

export const BaseOrganizationSchema = z.object({
  organizationId: z.string().uuid(),
  organizationName: z.string().min(1),
  organizationPhone: z.string(),
  organizationAddress: z.object({
    street: z.string().min(1),
    city: z.string().min(1),
    state: z.string(),
    zip: z.string(),
  }),
  numberOfEmployees: z.string(),
  enterpriseId: z.string().optional(),
});

export const RegisterOrganizationSchema = z.object({
  // organizationName: BaseOrganizationSchema.shape.organizationName,
  // email: UserProfileSchema.shape.email,
  // phone: UserProfileSchema.shape.phone.optional(),
  // firstName: UserProfileSchema.shape.firstName,
  // lastName: UserProfileSchema.shape.lastName,
  organizationName: z.string().min(1),
  email: UserProfileSchema.shape.email,
  phone: UserProfileSchema.shape.phone.optional(),
  firstName: UserProfileSchema.shape.firstName,
  lastName: UserProfileSchema.shape.lastName,
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(128, "Password must not exceed 128 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};'"])[A-Za-z\d!@#$%^&*()_+\-=[\]{};'"]{8,128}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export const SignInSchema = z.object({
  email: UserProfileSchema.shape.email,
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(128, "Password must not exceed 128 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};'"])[A-Za-z\d!@#$%^&*()_+\-=[\]{};'"]{8,128}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  signInFor: z.enum(["organization", "user"]),
});

// export const UpdateOrganizationSchema = BaseOrganizationSchema.omit({
//   organizationId: true,
//   enterpriseId: true,
// }).partial();
//
// export const GetOrganizationProfileSchema = z.object({
//   pathParameters: z.object({
//     organizationId: z.string().min(1, "Organization ID is required"),
//   }),
// });
//
// export type Organization = z.infer<typeof BaseOrganizationSchema>;
export type RegisterOrganizationRequest = z.infer<
  typeof RegisterOrganizationSchema
>;

export type SignInRequest = z.infer<typeof SignInSchema>;
export type OrganizationDetailsRequest = z.infer<typeof BaseOrganizationSchema>;
// export type UpdateOrganizationRequest = z.infer<
//   typeof UpdateOrganizationSchema
// >;
// export type GetOrganizationProfileRequest = z.infer<
//   typeof GetOrganizationProfileSchema
// >;
