import { ExecuteHandler } from "../../core/handlers/handler.execute";
import { InsertUser, User } from "./dtos/users.dtos.types";
import { UserRepository } from "./user.repository";

export class UserService {
  constructor(
    private repo: UserRepository,
    private readonly executeHandler: ExecuteHandler,
  ) {}
  async create(data: InsertUser): Promise<User> {
   return this.executeHandler.service(
        async () => {
            const result = await this.repo.create(data)
            return result
        }, "Error ao criar o usuário!",
        "Users/users.service.ts"
    )
  }
  async findById(id: string): Promise<User> {
   return this.executeHandler.service(
        async () => {
            const result = await this.repo.findById(id)
            return result
        }, "Error ao buscar o usuário!",
        "Users/users.service.ts"
    )
  }
  async findAll(): Promise<User[]> {
   return this.executeHandler.service(
        async () => {
            const result = await this.repo.findAll()
            return result
        }, "Error ao buscar os usuários!",
        "Users/users.service.ts"
    )
  }
  async update(id: string, data: InsertUser): Promise<User> {
   return this.executeHandler.service(
        async () => {
            const result = await this.repo.update(id, data)
            return result
        }, "Error ao criar o usuário!",
        "Users/users.service.ts"
    )
  }
  async delete(id: string): Promise<User> {
   return this.executeHandler.service(
        async () => {
            const result = await this.repo.delete(id)
            return result
        }, "Error ao deletar o usuário!",
        "Users/users.service.ts"
    )
  }
}
