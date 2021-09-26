import React from 'react'
import './Singers.css'

const singers = props => {
  const {key, img, name, age, height, born, live, salary} = props.singers;
  // console.log(props.singers.key)
  return (
    <div className="card">
      <div className="card_img_container">
      <img src={img} alt="" className="card_img"/>
      </div>
    <div>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h4>Height: {height}</h4>
      <h4>Born: {born}</h4>
      <h4>Live: {live}</h4>
      <h3>Salary: {salary}</h3>
    </div>
    <div>
      <button onClick={() => props.handleAddToCard({key, name, salary})}>Add to cart</button>
    </div>
    </div>
  );
};

export default singers;