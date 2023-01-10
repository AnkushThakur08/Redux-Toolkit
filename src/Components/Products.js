import React, { useState, useEffect } from 'react';

// Dispatch Function
import { useDispatch } from 'react-redux';

// ADD Action
import { add } from '../Store/cartSlice';

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const preload = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();

    setProducts(data);
  };

  useEffect(() => {
    preload();
  }, []);

  // Jis product pe click kregye..usko add karna hai, so we need Product here
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {console.log(products)}
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)} className="btn">
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
