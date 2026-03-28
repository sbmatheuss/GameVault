import { ExecuteHandler } from "../../core/handlers/handler.execute";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";

export function makeUserService() {
    const execute = new ExecuteHandler
    const repo = new UserRepository(execute)

    return new UserService(repo, execute)
}