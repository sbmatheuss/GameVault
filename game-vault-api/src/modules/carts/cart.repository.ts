// cart.repository.ts

import { eq } from "drizzle-orm";
import { ExecuteHandler } from "../../core/handlers/handler.execute";
import { db } from "../../db";
import { cart } from "../../db/schema";
import { Cart, InsertCart, UpdateCart } from "./dtos/cart.dtos.types";
import { MySqlRawQueryResult } from "drizzle-orm/mysql2";

export class CartRepository {
  constructor(private readonly executerHandler: ExecuteHandler) {}

  async create(data: InsertCart): Promise<Cart> {
    return this.executerHandler.repository(
      async () => {
        const id = crypto.randomUUID();
        await db.insert(cart).values({ ...data, id });
        const [findCart] = await db
          .select()
          .from(cart)
          .where(eq(cart.id, id));
        return findCart;
      },
      "Não foi possível criar o carrinho!",
      "Cart/cart.repository.ts",
    );
  }

  async findAll(): Promise<Cart[]> {
    return this.executerHandler.repository(
      async () => {
        return await db.select().from(cart);
      },
      "Não foi possível listar os carrinhos!",
      "Cart/cart.repository.ts",
    );
  }

  async findById(id: string): Promise<Cart> {
    return this.executerHandler.repository(
      async () => {
        const [findCart] = await db
          .select()
          .from(cart)
          .where(eq(cart.id, id));
        return findCart;
      },
      "Não foi possível buscar o carrinho!",
      "Cart/cart.repository.ts",
    );
  }

  async update(id: string, data: UpdateCart): Promise<Cart> {
    return this.executerHandler.repository(
      async () => {
        await db.update(cart).set(data).where(eq(cart.id, id));
        const [findCart] = await db
          .select()
          .from(cart)
          .where(eq(cart.id, id));
        return findCart;
      },
      "Não foi possível atualizar o carrinho!",
      "Cart/cart.repository.ts",
    );
  }

  async delete(id: string): Promise<MySqlRawQueryResult> {
    return this.executerHandler.repository(
      async () => {
        return await db.delete(cart).where(eq(cart.id, id));
      },
      "Não foi possível deletar o carrinho!",
      "Cart/cart.repository.ts",
    );
  }
}