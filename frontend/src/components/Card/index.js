import React from 'react'

import './card.scss'
import './card-devices.scss'

function Card (props){
  return (
    <div className='box-card'>
      <div className='box-card-image'>
        <img src = {props.image} />
      </div>
      <span className='box-card-description'>{props.name}</span>
      <span className='box-card-price'>${props.price}</span>
      <button className='box-card-button'> Comprar </button>
    </div>
  )
}

export default Card

