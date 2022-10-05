import React from 'react'
import { getHeroesById } from '../helpers.js/getHeroesById'
import { useParams, Navigate } from 'react-router-dom'

export const HeroPage = () => {
  const { id } = useParams();

  const heroe = getHeroesById( id )
   
  if( !heroe ){
    <Navigate to="/marvel" />
  }


  return (
    <div>
      <h1>
        {heroe.superhero}
      </h1>
    </div>
  )
}
