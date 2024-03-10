import React from 'react'

function Books({ kurs }) {
  const { id, title, description, price, link, image } = kurs;
  return (
    <div className='kurs'>
      <div>
        <img src={image} width={100}/>
        <h4 className='tt'>{title}</h4>
        <h5>{description}</h5>
        <h3 className='tt'>{price}</h3>
        <a href={link} className='color'>kursa daxil olun</a>
      </div>

    </div>
  )
}

export default Books