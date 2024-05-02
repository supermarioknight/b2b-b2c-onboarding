import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export enum UserStatus {
  INVITED = "INVITED",
  VERIFIED = "VERIFIED",
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED",
}

export const BaseUserSchema = z.object({
  userId: z.string().uuid().openapi({
    description: "The user's id",
    example: "123e4567-e89b-12d3-a456-426614174000",
  }),
  email: z.string().email().openapi({
    description: "The customer's email",
    example: "john@doe.com",
  }),
  organizationId: z.string(),
  userRole: z.string(),
  status: z.string().optional(),
  verificationToken: z.string().optional(),
  password: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export const GetUserProfileSchema = z.object({
  pathParameters: z.object({
    userId: z.string().min(1, "User ID is required"),
  }),
});

export const UserProfileSchema = BaseUserSchema.merge(
  z.object({
    firstName: z.string().min(1).openapi({
      description: "The user's first name",
      example: "John",
    }),
    lastName: z.string().min(1).openapi({
      description: "The user's last name",
      example: "Doe",
    }),
    phone: z.string().openapi({
      description: "The user's phone number",
      example: "1234567890",
    }),
    title: z.string().openapi({
      description: "The user's title",
      example: "Comfort Specialist",
    }),
    profileImage: z.string().openapi({
      description: "The user's profile image",
      example: "https://example.com/image.jpg",
    }),
  }),
);

export const CreateUserRequestSchema = BaseUserSchema.pick({
  email: true,
  organizationId: true,
  userRole: true,
  password: true,
});

export const UpdateUserSchema = z.object({
  //userId: z.string(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  title: z.string().optional(),
  profileImage: z.string().optional(),
});

export const inviteUserSchema = BaseUserSchema.pick({
  email: true,
  userRole: true,
});

export const inviteUsersRequestSchema = z.object({
  organizationId: z.string(),
  users: z.array(inviteUserSchema).min(1),
});

export type UserProfile = z.infer<typeof UserProfileSchema>;
export type BaseUser = z.infer<typeof BaseUserSchema>;
export type CreateUserRequest = z.infer<typeof CreateUserRequestSchema>;
export type UpdateUser = z.infer<typeof UpdateUserSchema>;
export type InviteUsersRequest = z.infer<typeof inviteUsersRequestSchema>;
