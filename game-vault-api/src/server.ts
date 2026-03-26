import { app } from "./app"
import dotenv from "dotenv"

dotenv.config()

const port = 3000

app.listen(port, () => {
    console.log("Servido rodando!")
})