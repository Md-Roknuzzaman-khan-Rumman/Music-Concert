import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singers from '../Singers/Singers'
import './Concert.css'


const Concert = () => {
  const [singers, setSingers] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(()=> {
    fetch('./singer.JSON')
    .then(res => res.json())
    .then(data => setSingers(data))
  },[])


  // button handler 
  const handleAddToCard = singer => {
    const newCart = [...carts, singer];
    setCarts(newCart);
  }

  return (
    <div id="concert">
      {/* all singers list */}
      <div id="singers_container">  
        {
          singers.map(singer => <Singers key={singer.key} singers={singer} handleAddToCard= {handleAddToCard} />)
        }
      </div>
      <div id="add_singers_container">
        {/* cards */}
      <Cart carts={carts}/>
      </div>
    </div>
  );
};

export default Concert;