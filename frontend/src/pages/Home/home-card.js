import React from 'react'

function Card (props){
  return (
    <div className='home-card'>
      <div className='home-card-image'>
        <img src = {props.image} />
      </div>
      <span className='home-card-description'>{props.name}</span>
      <span className='home-card-price'>${props.price}</span>
      <button className='home-card-button'> Comprar </button>
    </div>
  )
}

export default Card
