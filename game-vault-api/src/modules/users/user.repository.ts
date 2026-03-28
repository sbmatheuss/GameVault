import { eq } from "drizzle-orm";
import { ExecuteHandler } from "../../core/handlers/handler.execute";
import { db } from "../../db";
import { users } from "../../db/schema";
import { InsertUser, UpdateUser, User } from "./dtos/users.dtos.types";
import { MySqlRawQueryResult } from "drizzle-orm/mysql2";

export class UserRepository {
  constructor(private readonly executerHandler: ExecuteHandler) {}

  async create(data: InsertUser): Promise<User> {
    return this.executerHandler.repository(
      async () => {
        const id = crypto.randomUUID();
        await db.insert(users).values({ ...data, id });
        const [findUser] = await db
          .select()
          .from(users)
          .where(eq(users.id, id));
        return findUser;
      },
      "Não foi possível criar o usuário!",
      "Users/users.repository.ts",
    );
  }

  async findById(id: string): Promise<User> {
    return this.executerHandler.repository(
      async () => {
        const [findUser] = await db
          .select()
          .from(users)
          .where(eq(users.id, id));
        return findUser;
      },
      "Não foi possível busca o usuário!",
      "Users/users.repository.ts",
    );
  }

  async findAll(): Promise<User[]> {
    return this.executerHandler.repository(
      async () => {
        const findUser = await db.select().from(users);
        return findUser;
      },
      "Não há usuários!",
      "Users/users.repository.ts",
    );
  }
  async update(id: string, data: UpdateUser): Promise<User> {
    return this.executerHandler.repository(
      async () => {
        await db.update(users).set(data).where(eq(users.id, id));
        const [findUser] = await db
          .select()
          .from(users)
          .where(eq(users.id, id));
        return findUser;
      },
      "Não foi possível atualizar o usuário!",
      "Users/users.repository.ts",
    );
  }
  async delete(id: string): Promise<MySqlRawQueryResult> {
    return this.executerHandler.repository(
      async () => {
        return await db.delete(users).where(eq(users.id, id));
      },
      "Não foi possível deletar o usuário!",
      "Users/users.repository.ts",
    );
  }
}
