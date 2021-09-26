import React from 'react';
import './Cart.css'

const Cart = props => {
  const {carts} = props;
  let total = 0;
  let unique=[];
  let check;
  for (const singer of carts) {   
      total = total + singer.salary;
      unique.push(singer.key)
      console.log(unique)    
  }
  return (
    <div>
      <h2>Singers Added: {carts.length}</h2>
      <h1>Total Cost: ${total}</h1>
      {
        carts.map(singers => <p>{singers.name}</p>)
      }
    </div>
  );
};

export default Cart;