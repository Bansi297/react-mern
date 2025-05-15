// src/App.jsx
import { createContext, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { PiCurrencyInrBold } from "react-icons/pi";
import Swal from 'sweetalert2';

import { earbuds, shoes, tshirts, tshirtWomen } from './components/Products';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
import Register from './components/Register';
import Login from './components/Login';
import Users from './components/Users';
import ProductDetails from './components/ProductDetails';
import { ForgotPassword } from './components/forgotPassword';

export const maincontext = createContext();

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchvar, setSearchVar] = useState([]);
  const [singleproduct, setsingleproduct] = useState({});
  const inr = <PiCurrencyInrBold />;

  useEffect(() => {
    setProducts([...earbuds, ...tshirts, ...shoes, ...tshirtWomen]);
  }, []);

  function searchHandler(e) {
    e.preventDefault();
    navigate('/search');
  }

  function addtocart(id) {
    const obj = products.find((x) => x.id === id);
    const existing = cart.find((x) => x.id === id);
    if (!existing) {
      setCart([...cart, obj]);
    }
  }

  function RemoveCart(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "you want to remove this item from cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const filteredArr = cart.filter((x) => x.id !== id);
        setCart(filteredArr);
        Swal.fire("Deleted!", "Product Removed successfully!", "success");
      }
    });
  }

  function qtyInc(product) {
    const id = product.id;
    const cartproduct = cart.find((x) => x.id === id);
    cartproduct.qty++;
    setCart([...cart]);
  }

  function qtyDec(product) {
    const id = product.id;
    const cartproduct = cart.find((x) => x.id === id);
    if (cartproduct.qty <= 1) {
      RemoveCart(id);
    } else {
      cartproduct.qty--;
      setCart([...cart]);
    }
  }

  return (
    <maincontext.Provider value={{
      products, cart, addtocart, RemoveCart,
      setSearchVar, searchvar, searchHandler,
      inr, qtyDec, qtyInc, setsingleproduct, singleproduct
    }}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/search' element={<Search />} />
        <Route path='/product' element={<ProductDetails />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/users' element={<Users />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
      </Routes>
    </maincontext.Provider>
  );
}

export default App;
