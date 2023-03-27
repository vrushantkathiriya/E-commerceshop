import { Routes, Route, useNavigate, createSearchParams, BrowserRouter } from "react-router-dom"

// import { NavBar } from "./Component/navbar/Navbar"
import { Product } from "./Pages/Product/Product"
import { Products } from "./Pages/Products/Products"
import { Cart } from "./Pages/Cart/Cart"
import { NotFound } from "./Pages/Not-found/Not-found"
import { useCart } from './Context/Cart'
import Navbar from "./Component/navbar/Navbar"


function App() {          

  const navigate = useNavigate();  
  const { cartItemCount } = useCart()

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
    
    <>
        <Navbar  />
      <Routes>
        <Route path="/navbar" element={<Navbar onSearch={onSearch} cartItemCount={cartItemCount()} />}/>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </>
     
  );    
}

export default App;  