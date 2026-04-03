import { Router } from "express";
import { createFavorite, deleteFavorite, findAllFavorite, findByIdFavorite, updateFavorite } from "./favorites.controller";

const favoriteRoute = Router()

favoriteRoute.get("/favorite/:id", findByIdFavorite)
favoriteRoute.get("/favorite", findAllFavorite)
favoriteRoute.post("/favorite", createFavorite)
favoriteRoute.put("/favorite/:id", updateFavorite)
favoriteRoute.delete("/favorite/:id", deleteFavorite)

export { favoriteRoute }