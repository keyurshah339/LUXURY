import { useDataContext } from "../../Context/data-context";
import { WishlistItem } from "./wishlistItem";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {Navigation} from '../../Components'

export const Wishlist = () => {
  const {
    state: { itemsInWishlist },
    dispatch,
  } = useDataContext();
  const totalItems = itemsInWishlist.length;

  useEffect(() => {
    document.title = " LUXURY | WISHLIST"
  },[]);

  return (
    <>
    <Navigation/>
    <h2 className="secondary-txt">Wishlist </h2>
    {totalItems>0 && <span className="total-wishes">({totalItems} items)</span>}
    <section className={totalItems>1?"grid-container":"wishes-container"}>
    {itemsInWishlist.map(
        (item) =>( <WishlistItem key={item.id} item={item} />
      ))}
    </section>
    {totalItems === 0 && (
        <>
        
          <h3>You don't have any wishes.</h3>
          <NavLink to="/products">
          <button
            className="btn-wish  button1"
            onClick={() => dispatch({ type: "ROUTE", payload: "products" })}
          >
            Add some wishes!
          </button>
          </NavLink>
        </>
      )}
    </>
  );
};