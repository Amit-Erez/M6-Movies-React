import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Rating = ({rating}) => {
  
  const ratingNum = Math.floor(Number(rating) || 0)
 

  return (
    <>
    {new Array(ratingNum).fill(0).map((_, index) => (
      <FontAwesomeIcon icon="fa-solid fa-star" key={index} />
    ))
    }
    {
      !Number.isInteger(Number(rating)) && 
      <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" />
    }
    </>
  )
    
}

export default Rating

