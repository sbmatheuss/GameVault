import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { users } from "../../../db/schema";

export type User = InferSelectModel<typeof users>
export type InsertUser = InferInsertModel<typeof users>
export type UpdateUser = Partial<InsertUser>