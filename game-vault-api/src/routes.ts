import { Router } from "express";
import { userRouter } from "./modules/users/user.router";

const router = Router()

router.get('/', (req, res ) => {
  res.send('Hello World!')
})

router.use(userRouter)

export { router }
