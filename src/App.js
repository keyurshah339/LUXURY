import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import {
  Home,
  Cart,
  ProductListing,
  Wishlist,
  Toast,
  Navigation,
} from "./Components";
import { useDataContext } from "./Context/data-context";
import { serverRequest } from "./api/serverRequest";
import { AuthCheck } from './Components/Auth/auth'
import axios from "axios";
import MyAuth from "./authGuard/authGuard"
import {Signup} from "./Components/Auth/signup"

function App() {
  const {
    state: { toastMsg },
    dispatch,
    login
  } = useDataContext();

  console.log('login',login)

  const [prod,setprod] = useState()

  useEffect(() => {
    var mydata
    axios.get('https://videolib.tristan9.repl.co/products')
    .then(res =>  {
      mydata =res.data.products
      console.log('mydata',mydata)
      dispatch({ type: "SET_PRODUCTS", payload: mydata });
    } )
    
  }, [dispatch]);

  return (
    <div className="App">
      <div className="route-container">{toastMsg && <Toast />}</div>
      <Routes>
        <Route path="/login" element={<AuthCheck />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="cart" element={
        <MyAuth>
        <Cart />
        </MyAuth>
        } />
        <Route path="products" element={<ProductListing />} />
        
        <Route path="wishlist" element={
        <MyAuth>
        <Wishlist />
        </MyAuth>
        } />
      </Routes>
    </div>
  );
}

export default App;
