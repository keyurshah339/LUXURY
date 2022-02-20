import { useDataContext } from "../../Context/data-context";
import { CartItem } from "./cartItem";

import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { PriceDetails } from "./priceDetail";
import {Navigation} from '../../Components'

export const Cart = () => {
  const {
    state: { itemsInCart },
    dispatch,
  } = useDataContext();
  const cartTotal = itemsInCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = itemsInCart.reduce((acc, curr) => acc + curr.quantity, 0);
  
  useEffect(() => {
    document.title = "LUXURY | CART"
  },[]);

  return (
    <>
    <Navigation/>
      <h2 className="secondary-txt">
        Shopping <span className="secondary-txt">Bag</span> 
      </h2>
      {totalItems > 0 && (
          <button
            type="button"
            className="btn btn-dark button1"
            onClick={() => dispatch({ type: "CLEAR_CART" })}
          >
            Remove All Items
          </button>
      )}
      
      <div className={totalItems>0?"cart-container":"empty-cart"}>
        <section className="cart-items">
          {itemsInCart.map(
            (item) =>
              item.quantity > 0 && <CartItem key={item.id} item={item} />
          )}
        </section>
        {totalItems === 0 && (
          <>
        
            <h3>There are no items added to Cart</h3>
            <NavLink to="/products">
            <button
              className="btn-wish  button1"
             >
              View Products
            </button>
            </NavLink>
          </>
        )}

        {totalItems > 0 && <PriceDetails totalItems={totalItems} cartTotal={cartTotal}/>}
      </div>
    </>
  );
};

