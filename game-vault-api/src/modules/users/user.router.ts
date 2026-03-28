import { Router } from "express";
import { createUser, deleteUser, findAll, findById, updateUser } from "./user.controller";

const userRouter = Router()

userRouter.post("/users", createUser)
userRouter.get("/users/:id", findById)
userRouter.get("/users", findAll)
userRouter.put("/users/:id", updateUser)
userRouter.delete("/users/:id", deleteUser)

export { userRouter }