import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"
import Cart from "./pages/Cart/Cart"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import Login from "./pages/Login/Login"
import Register from "./pages/Login/Register"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:slug" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
