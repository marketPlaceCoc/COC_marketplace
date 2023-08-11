import Navbar from "./Components/Navbar";
import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { BrowserRouter,HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import ProductPage from "./pages/ProductPage";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import User from "./pages/User";
import SaleTiles from "./Components/SaleTiles";
import Review from "./pages/Review";

function App() {
  let [cartItem, setCartItem] = useState("");
  let [Account_col, setAccounts] = useState();
  let [uid, setUid] = useState('');

  useEffect(() => {
      const savedUid = localStorage.getItem("uid");

      if (savedUid) {
        console.log('uid set by saved id - ', savedUid);
        setUid(savedUid);
      }
  }, []);

  useEffect(() => {
    console.log("uid changed - ", uid);

    if (uid === "") {
      localStorage.removeItem("uid");
    } else {
      localStorage.setItem("uid", uid);
    }
  }, [uid]);


  return (
    <HashRouter className="App">
      <Navbar uid={uid} cart="0" cartCost="0" />
      <Routes>
        <Route
        
          path="/"
          element={
            <Home
              Account_col={Account_col}
              setAccounts={setAccounts}
              uid={uid}
              cartItem={cartItem}
              setCartItem={setCartItem}
            />
          }
        />
        <Route
        
          path="/Accounts"
          Account_col={Account_col}
          setAccounts={setAccounts}
          element={<SaleTiles
            uid={uid}
          />}
        />
        <Route
          path="/login"
          element={<Login uid={uid} setUid={setUid} />}
        />
        <Route path="/Blog" element={<Blog cartItem={cartItem} />} />
        <Route
        
          path="/Cart"
          element={
            <Cart
              uid={uid}
              Account_col={Account_col}
              setAccounts={setAccounts}
              cartItem={cartItem}
              setCartItem={setCartItem}
            />
          }
        />
        <Route path="/FAQs" element={<Faq cartItem={cartItem} />} />
        <Route
        
          path="/admin"
          uid={uid}
          element={<Admin />}
        />
        <Route
        
          uid={uid}
          path="/Product"
          element={<ProductPage productID={"product1"} uid={uid} />}
        />
        <Route path="/success" element={<Success uid={uid} setUid={setUid} />} />
        <Route path="/Canceled" element={<Cancel />} />
        <Route path="/Account" element={<User uid={uid} setUid={setUid}/>} />
        <Route path="/reviews" element={<Review/>} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
