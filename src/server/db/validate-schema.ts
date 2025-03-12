import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { users } from './schema';

export const createUserSchema = createInsertSchema(users,  {
  email: (schema) => schema.email(),
});

export const updateUserSchema = createUserSchema.pick({ email: true })

export const queryUserSchema = createSelectSchema(users);