import React from 'react'
import Cart from '../components/CartPage/Cart';
import Hero from '../components/Hero';
import cartBcg from '../images/storeBcg.jpeg';

const CartPage = (props) =>  {
  return (
    <React.Fragment>
      <Hero img={cartBcg} />
      <Cart history={props.history} />
    </React.Fragment>
  )
}

export default CartPage;
