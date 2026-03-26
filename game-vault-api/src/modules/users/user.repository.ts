import { db } from "../../db";
import { users } from "../../db/schema";

export class UserRepository{
  async create(data: any) {
    try {
      const [result] = await db.insert(users).values(data)

      if (!result) throw new Error("Error ao criar")

      return result
    } catch (error: any) {

    }
  }
}