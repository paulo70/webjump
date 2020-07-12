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

      <div className='box-card-values'>
        { props.special ?
          <span className='box-card-values-special'>${props.special}</span>
          : ''
        }

        <span className='box-card-values-price'>${props.price}</span>
      </div>

      <div className='box-card-button'>
        <button className='box-card-button-order'> Comprar </button>
      </div>
    </div>
  )
}

export default Card

