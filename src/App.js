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

function App() {
  const {
    state: { toastMsg },
    dispatch,
  } = useDataContext();

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
        <Route path="/" element={<AuthCheck />} />
        <Route path="home" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<ProductListing />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
