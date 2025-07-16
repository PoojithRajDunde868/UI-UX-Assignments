import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/">Products</Link>
      <Link to="/cart" style={{ marginLeft: '1rem' }}>
        Cart ({totalItems})
      </Link>
    </nav>
  );
};

export default Navbar;
