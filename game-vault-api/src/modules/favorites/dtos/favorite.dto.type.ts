import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { favorite } from "../../../db/schema";

export type InsertFavorite = InferInsertModel<typeof favorite>
export type Favorite = InferSelectModel<typeof favorite>
export type UpdateFavorite = Partial<InsertFavorite>