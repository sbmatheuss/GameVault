import { Router } from "express";
import { userRouter } from "./modules/users/user.router";
import { favoriteRoute } from "./modules/favorites/favorite.route";
import { cartRouter } from "./modules/carts/cart.router";

const router = Router()

router.get('/', (req, res ) => {
  res.send('Hello World!')
})

router.use(userRouter)
router.use(favoriteRoute)
router.use(cartRouter)

export { router }
