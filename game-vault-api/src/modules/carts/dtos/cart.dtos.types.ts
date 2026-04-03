
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { cart } from "../../../db/schema";

export type InsertCart = Omit<InferInsertModel<typeof cart>, "id">;
export type Cart = InferSelectModel<typeof cart>;
export type UpdateCart = Partial<InsertCart>;