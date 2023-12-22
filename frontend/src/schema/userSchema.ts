import { z } from "zod";

export const UserSchema = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  id: z.string(),
});

export type User = z.infer<typeof UserSchema>;




