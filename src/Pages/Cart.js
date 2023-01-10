// To Get the item from the STATE
import { useDispatch, useSelector } from 'react-redux';

import { remove } from '../Store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();

  // Subscribe the STATE
  const products = useSelector((state) => state.cart);

  const removeProduct = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <h1>CART</h1>
      <div className="cartWrapper">
        {products.map((product) => {
          return (
            <div key={product.id} className="cartCard">
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button onClick={() => removeProduct(product.id)} className="btn">
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
