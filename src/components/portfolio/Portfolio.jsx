import React from 'react'
import './portfolio.css' 
import IMG1 from 'url(../src/assets/portfolio1.jpg)'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio item-image">
            <img src={IMG1} alt=''/>
          </div>
          <h3>Discord Crypto Pricing Bot</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/nandor-gallo/PreCryptoBot' className='btn'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio