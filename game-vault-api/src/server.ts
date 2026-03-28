import { app } from "./app"

(() => {
    const port = process.env.PORT || 3000
    try {
        app.listen(port)
        console.log("✅ Servido rodando...")
    } catch (error) {
        console.error("Error ao rodar o servido", error)
    }
})()