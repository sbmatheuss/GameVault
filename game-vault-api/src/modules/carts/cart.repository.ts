import { eq } from "drizzle-orm";
import { ExecuteHandler } from "../../core/handlers/handler.execute";
import { db } from "../../db";
import { cart } from "../../db/schema";
import { MySqlRawQueryResult } from "drizzle-orm/mysql2";
import { Cart, InsertCart } from "./dtos/cart.dtos.types";


export class CartRepository {
  constructor(private readonly executerHandler: ExecuteHandler) {}

  async addItem(data: InsertCart): Promise<Cart> {
    return this.executerHandler.repository(
      async () => {
        const id = crypto.randomUUID();
        await db.insert(cart).values({ ...data, id });
        const [findItem] = await db 
          .select()
          .from(cart)
          .where(eq(cart.id, id));
          return findItem;
      },
      "Não foi possível adicionar o item ao carrinho!",
      "Cart/cart.repository.ts",
    );
  }

  async removeItem(id: string): Promise<MySqlRawQueryResult> {
    return this.executerHandler.repository(
      async () => {
        return await db.delete(cart).where(eq(cart.id, id));
      },
      "Não foi possível remover o ite do carrinho",
      "Cart/cart.repostiry.ts",
    );
  }



}

