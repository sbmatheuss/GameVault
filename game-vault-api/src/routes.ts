import { Router } from "express";
import { userRouter } from "./modules/users/user.router";
import { favoriteRoute } from "./modules/favorites/favorite.route";

const router = Router()

router.get('/', (req, res ) => {
  res.send('Hello World!')
})

router.use(userRouter)
router.use(favoriteRoute)

export { router }
