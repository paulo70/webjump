import React from 'react'

function Card (props){
  return (
    <div className='content-card'>
      <div className='content-card-image'>
        <img src = {props.image} />
      </div>
      <span className='content-card-description'>{props.name}</span>
      <span className='content-card-price'>${props.price}</span>
      <button className='content-card-button'> Comprar </button>
    </div>
  )
}

export default Card
