import { eq } from "drizzle-orm";
import { ExecuteHandler } from "../../core/handlers/handler.execute";
import { db } from "../../db";
import { cart, favorite } from "../../db/schema";
import { Favorite, InsertFavorite } from "./dtos/favorite.dto.type";

export class FavoriteRepository {
    constructor( private readonly executehandler: ExecuteHandler) {}

    create(data: InsertFavorite): Promise<Favorite> {
        return this.executehandler.repository(
            async () => {
                const id = crypto.randomUUID()
                await db.insert(favorite).values({...data, id})
                const result = await db.select().from(cart).where(eq(favorite.id, id))
                return result[0]
            }, "Não foi possível criar o favorito",
            "favorites/favorite.repository.ts"
        )
    }

    findById(id: string): Promise<Favorite> {
        return this.executehandler.repository(
            async () => {
                const result = await db.select().from(favorite).where(eq(favorite.id, id))
                return result[0]
            }, "Não foi possível buscar o favorito",
            "favorites/favorite.repository.ts"
        )
    }

    findAll(): Promise<Favorite[]> {
        return this.executehandler.repository(
            async () => {
                const result = await db.select().from(favorite)

                return result
            }, "Não há favoritos disponíveis",
            "favorites/favorite.repository.ts"
        )
    }

    update(id: string, data: any): Promise<Favorite> {
        return this.executehandler.repository(
            async () => {
                await db.update(favorite).set(data).where(eq(favorite.id, id))
                const result = await db.select().from(favorite).where(eq(favorite.id, id))
                return result[0]
            }, "Não foi atualizar o favorito",
            "favorites/favorite.repository.ts"
        )
    }

    delete(id: string) {
        return this.executehandler.repository(
            async () => {
                const result = await db.delete(favorite).where(eq(favorite.id, id))
                return result
            }, "Não foi possível deletar o favorito",
            "favorites/favorite.repository.ts"
        )
    }
}