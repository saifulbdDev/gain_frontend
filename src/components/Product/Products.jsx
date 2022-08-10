import React, { useEffect, useState } from "react";
import { productsSort } from "../../utils/productsSort";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import Product from "./ProductBody";

const Products = ({ storeData }) => {
  const [sortingProducts, setSortingProducts] = useState([]);
  const [page, setPage] = useState(20);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    if (page <= sortingProducts.length) {
      console.log(sortingProducts.length)
      setPage((prev) => prev + 20);
      setIsFetching(false);
      console.log(page)
    
    }
  }
  console.log(page)

  useEffect(() => {
    setSortingProducts(storeData);
  }, [storeData]);

  const onChangeHandle = (e) => {
    const sortData = productsSort(e.target.value, storeData);
    setSortingProducts(sortData);
  };

  return (
    <>
      <div className="product-header">
        <h3>All Products</h3>
        <div className="d-flex align-items-center">
          <div className="me-2">Sort by:</div>
          <div>
            <select
              onChange={onChangeHandle}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="all-products">All Products</option>
              <option value="best-value">Best Value</option>
              <option value="best-camera">Best Camera</option>
              <option value="best-performance">Best Performance</option>
            </select>
          </div>
        </div>
      </div>
      <table id="table" className="table table-borderless">
        <thead>
          <tr>
            <th>Model Name</th>
            <th>Ram/Rom</th>
            <th>Tag</th>
            <th>Price</th>
          </tr>
        </thead>

        <Product sortingProducts={sortingProducts} pageSize={page} />
      </table>
    </>
  );
};

export default Products;
