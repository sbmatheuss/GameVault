import { app } from "./app"

(() => {
  const port = process.env.PORT || 3000
  try {
    app.listen(port)
    console.log("Servidor Rodando... ")
  } catch (error) {
    console.error("Error ao rodar o servidor", error)
  }

})()