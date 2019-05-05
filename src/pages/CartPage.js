import React from 'react'
import Cart from '../components/CartPage/Cart';
import Hero from '../components/Hero';
import cartBcg from '../images/storeBcg.jpeg';

const CartPage = () =>  {
  return (
    <React.Fragment>
      <Hero img={cartBcg} />
      <Cart />
    </React.Fragment>
  )
}

export default CartPage;
