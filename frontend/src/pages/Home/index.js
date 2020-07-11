import React from 'react'

import './home.scss'

function Home(){
  return (
    <>
      <h2 className='title-pages'>Sapatos</h2>
      <div className='home'>
        <div className='home-card'>
          <div className='home-card-image'>
          </div>
          <span className='home-card-description'>Tênis Adidas</span>
          <span className='home-card-price'>R$ 299,00</span>
          <button className='home-card-button'> Comprar </button>
        </div>

        <div className='home-card'>
          <div className='home-card-image'>
          </div>
          <span className='home-card-description'>Tênis Adidas</span>
          <span className='home-card-price'>R$ 299,00</span>
          <button className='home-card-button'> Comprar </button>
        </div>

        <div className='home-card'>
          <div className='home-card-image'>
          </div>
          <span className='home-card-description'>Tênis Adidas</span>
          <span className='home-card-price'>R$ 299,00</span>
          <button className='home-card-button'> Comprar </button>
        </div>

        <div className='home-card'>
          <div className='home-card-image'>
          </div>
          <span className='home-card-description'>Tênis Adidas</span>
          <span className='home-card-price'>R$ 299,00</span>
          <button className='home-card-button'> Comprar </button>
        </div>
      </div>
    </>
  )
}

export default Home
