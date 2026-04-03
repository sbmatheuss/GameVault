import { ExecuteHandler } from "../../core/handlers/handler.execute";
import { FavoriteRepository } from "./favorite.repository";
import { FavoriteService } from "./favorites.service";

export function makeFavoriteService() {
    const execute = new ExecuteHandler
    const repo = new FavoriteRepository(execute)

    return new FavoriteService(repo, execute)
}