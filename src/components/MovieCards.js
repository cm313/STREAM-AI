import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'


const MovieCards = ({path, title}) => {
  if(!path)
    return null;
  return (
    <div className="w-28 md:w-48 pr-4 hover:cursor-pointer">
     <img src={IMG_CDN_URL+path} alt={title}></img>
    </div>
  )
}

export default MovieCards