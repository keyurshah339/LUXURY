import { useEffect, useState } from "react";
import { useDataContext } from "../../Context/data-context";
import shopProduct from "../../images/window-shop.svg";
import {
  FilterProducts,
  getSortedProducts,
  getFilteredProducts,
} from "./filterProducts";
import { Product } from "./products";


export const ProductListing = () => {
  const [showFilters, setShowFilters] = useState(false);
  const {
    state: { products, sortBy, inStock, fastDelivery, priceRange, searchValue },
  } = useDataContext();

  const sortedProducts = getSortedProducts(products, sortBy);
  const filteredProducts = getFilteredProducts(
    sortedProducts,
    inStock,
    fastDelivery,
    priceRange,
    searchValue
  );
  useEffect(() => {
    document.title = "LUXURY | PRODUCTS";
    if (window.innerWidth >= 768) {
      setShowFilters(true);
    }
  }, []);

  return (
    <>
      <h2 className="txt-header-2">
        Products 
      </h2>
      <section className="product-listing-container">
        <p className="btn-filter" onClick={() => setShowFilters(!showFilters)}>
          <i className="fas fa-filter">{showFilters ? "Apply" : "Filters"}</i>
        </p>
        {showFilters && (
          <div className="filter-component-container">
            <FilterProducts />
          </div>
        )}
        <section className={filteredProducts.length>0?"grid-container product-list":"product-list"}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div key={item.id}>
                <Product product={item} />
              </div>
            ))
          ) : (
            <>
              <img
                className="img-res img-svg"
                src={shopProduct}
                alt="products"
              />
              <h2 className="txt-header-2">No Products to display</h2>
            </>
          )}
        </section>
      </section>
    </>
  );
};