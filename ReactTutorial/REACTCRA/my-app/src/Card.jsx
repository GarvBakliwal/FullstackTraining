import React from 'react'
import './Card.css'
import Garv from './Assets/Garv.png'
// import bgImage from './Assets/backgroundimage.png'

function Card(props) {
  return (
    <div className='Card'>
      <h1>{props.text}</h1>
      <img src={Garv} alt='Garv'/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vitae laboriosam vero error ea expedita praesentium, sequi veritatis animi facilis, iure culpa deserunt sed, optio nisi incidunt sit. Ipsa, voluptates.</p>
    </div>
  )
}

export default Card