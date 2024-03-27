/**
 *
 * ProductList
 *
 */

import React from "react";

import { Link } from "react-router-dom";

const ProductList = (props) => {
  const { products } = props;

  return (
    <div className="p-list">
      {products.map((product, index) => (
        <Link
          to={`/dashboard/product/edit/${product._id}`}
          key={index}
          className="d-flex flex-row align-items-center mx-0 mb-3 product-box"
        >
          <img className="item-image" src={`${product && product.image}`} />
          <div className="d-flex flex-column justify-content-center px-3 text-truncate">
            <h4 className="text-truncate">{product.name}</h4>
            <p className="mb-2 text-truncate">{product.description}</p>
            {product?.merchant && product?.merchant?._id && (
              <div className="d-flex">
                <label>By</label>
                <p className="brand-merchant mb-0 ml-2 text-primary">
                  {product.merchant.name}
                </p>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
