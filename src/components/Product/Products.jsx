import React, { useEffect, useState, useCallback } from "react";
import { productsSort } from "../../utils/productsSort";
import InfiniteScroll from "../useInfiniteScroll";
import Product from "./ProductBody";

const Products = ({ storeData }) => {
  const [sortingProducts, setSortingProducts] = useState([]);
  let [page, setPage] = useState(20);

  const fetchMore = useCallback(() => {
 
    setPage((prev) => prev + 20);
  }, []);

  useEffect(() => {
    setSortingProducts(storeData);
  }, [storeData]);

  const onChangeHandle = (e) => {
    const sortData = productsSort(e.target.value, storeData);
    setSortingProducts(sortData);
  };
console.log(page)
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
      <div className="product" >
      <table className="table table-borderless">
        <thead>
          <tr>
            <th className="td-padding">Model Name {page}</th>
            <th className="td-padding">Ram/Rom</th>
            <th className="td-padding">Tag</th>
            <th className="td-padding">Price</th>
          </tr>
        </thead>

        <Product sortingProducts={sortingProducts} pageSize={page} />
      </table>
      </div>
      {sortingProducts.length > page ? (
        <InfiniteScroll fetchMore={fetchMore} />
      ) : (
        ""
      )}

    </>
  );
};

export default Products;
