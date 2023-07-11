import Navbar from "./Components/Navbar";
import React,{ useState } from "react";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import Accounts from "./pages/Accounts";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";

function App() {
  let [cartItem, setCartItem] = useState("");
  return (
    <Router className="App">
      <Navbar cart="0" cartCost="0" />
      <Routes>
        <Route exact path="/" element={<Home cartItem = {cartItem} setCartItem={setCartItem}/>} />
        <Route exact path="/Accounnts" element={<Accounts cartItem = {cartItem} setCartItem={setCartItem} />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/Blog" element={<Blog cartItem = {cartItem}/>} />
        <Route exact path="/Cart" element={<Cart cartItem = {cartItem} setCartItem={setCartItem}/>} />
        <Route exact path="/FAQs" element={<Faq cartItem = {cartItem}/>} />
        <Route exact path="/admin" element={<Admin/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
