import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./pages/Home"
import { Cart } from "./pages/Card"
import { Account } from "./pages/account"


function App() {

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/cart" element={ <Cart />} />
      <Route path="/account" element={ <Account />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App