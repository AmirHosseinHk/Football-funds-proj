import React from 'react'
import './Card.css'
import Cardimg from './Cardimg/Cardimg'
import Livebox from './livebox/Livebox'

export default function Card() {
  return (
    <div className='Card'>
        <Cardimg />
        <Livebox />
    </div>
  )
}
