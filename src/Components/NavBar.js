import { Link } from 'react-router-dom';

// TO SHOW DATA FROM STATE
import { useSelector } from 'react-redux';

const NavBar = () => {
  /* useSelector basically subscribe the state, ke jaise he state me chnage hoga...we don't need to REQUEST, vo khud he UPDATED DATA DEGA..
  Because we have Subscribe it */
  /*puri State*/ /* State jo subscribe kre hai */
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span className="logo">REDUX STORE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items: {items.length}</span>
      </div>
    </div>
  );
};

export default NavBar;
