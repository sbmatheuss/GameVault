import { ExecuteHandler } from "../../core/handlers/handler.execute";
import { Favorite, InsertFavorite } from "./dtos/favorite.dto.type";
import { FavoriteRepository } from "./favorite.repository";

export class FavoriteService {
  constructor(
    private readonly repo: FavoriteRepository,
    private readonly executehandler: ExecuteHandler,
  ) {}

  create(data: InsertFavorite): Promise<Favorite> {
    return this.executehandler.service(
      async () => {
        const result = await this.repo.create(data);
        return result;
      },
      "Error ao criar o favorito",
      "favorites/favorite.service.ts",
    );
  }
  findById(id: string): Promise<Favorite> {
    return this.executehandler.service(
      async () => {
        const result = await this.repo.findById(id)
        return result;
      },
      "Error ao executar findById",
      "favorites/favorite.service.ts",
    );
  }
  findAll(): Promise<Favorite[]> {
    return this.executehandler.service(
      async () => {
        const result = await this.repo.findAll();
        return result;
      },
      "Error ao executar findAll",
      "favorites/favorite.service.ts",
    );
  }
  update(id: string, data: any): Promise<Favorite> {
    return this.executehandler.service(
      async () => {
        const result = await this.repo.update(id, data);
        return result;
      },
      "Error ao executar update",
      "favorites/favorite.service.ts",
    );
  }
  delete(id: string) {
    return this.executehandler.service(
      async () => {
        const result = await this.repo.delete(id);
        return result;
      },
      "Error ao executar delete",
      "favorites/favorite.service.ts",
    );
  }
}
